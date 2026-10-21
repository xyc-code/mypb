const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const base = 'http://127.0.0.1:8080/pb/';
const cookies = new Map();
const checks = [];
function check(value,label) { assert(value,label); checks.push(label); }
async function request(path, form, redirects = 0) {
  const url = new URL(path, base);
  if (url.origin !== new URL(base).origin) throw new Error('Unexpected non-local redirect');
  const response = await fetch(url, {
    method: form ? 'POST' : 'GET', redirect: 'manual',
    headers: { Cookie: [...cookies].map(([k, v]) => `${k}=${v}`).join('; '),
      Accept: /\/login$/.test(url.pathname) ? 'text/html' : 'application/json',
      ...(form ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}) },
    body: form ? new URLSearchParams(form).toString() : undefined,
    signal: AbortSignal.timeout(30000)
  });
  for (const cookie of response.headers.getSetCookie()) {
    const pair = cookie.split(';')[0], split = pair.indexOf('=');
    cookies.set(pair.slice(0, split), pair.slice(split + 1));
  }
  const text = await response.text();
  if ([301, 302, 303].includes(response.status)) {
    if (redirects >= 8) throw new Error('Too many redirects');
    return request(new URL(response.headers.get('location'), url).href, null, redirects + 1);
  }
  let json;
  try { json = JSON.parse(text); } catch (_) { /* Login and management pages are HTML. */ }
  return { status: response.status, type: response.headers.get('content-type'), text, json, url: url.href };
}

async function login() {
  const user = process.env.PB_TEST_LOGIN;
  const password = process.env.PB_TEST_LOGIN_PASSWORD;
  if (!user || !password) throw new Error('Set PB_TEST_LOGIN and PB_TEST_LOGIN_PASSWORD');
  const page = await request('login');
  if (/name="inputCode"/.test(page.text)) throw new Error('Interactive verification is required by the login page');
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync('WebRoot/static/h5/base64/aes.js', 'utf8'), context);
  const source = fs.readFileSync('WebRoot/login/console/login.jsp', 'utf8');
  const key = source.match(/CryptoJS\.enc\.Utf8\.parse\('([^']+)'\)/)[1];
  const crypto = context.CryptoJS;
  const encrypted = crypto.AES.encrypt(password, crypto.enc.Utf8.parse(key),
    { mode: crypto.mode.ECB, padding: crypto.pad.Pkcs7 }).toString();
  const response = await request('admin/login', { username_: user, password_: encrypted });
  const probe = await request('platform/avicit/pb/yzbyts/summary/config');
  check(probe.json && probe.json.flag === 'success', 'normal local login');
  check(probe.json.data.photoMax === 4, 'four-photo server configuration');
}

(async () => {
  await login();
  const route = 'platform/avicit/pb/yzbyts/summary/';
  for (const status of ['', 'NOT_STARTED', 'DRAFT', 'SUBMITTED']) {
    const result = await request(route+'list', {year:2026,partyName:'一支部一特色测试',status,page:1,rows:20});
    check(result.status===200 && result.json.flag==='success', 'HTTP Chinese name filter / '+(status||'ALL'));
  }
  const current = await request(route+'get',{year:2026,partyId:'YZSUM_REBUILD_IT_UI'});
  check(current.json.flag==='success' && current.json.data.STATUS==='SUBMITTED','browser submission persisted');
  check(current.json.data.PRACTICE.includes('直接提交也保存最新文字'),'latest unsaved text persisted by submit');
  const headers = {Cookie:[...cookies].map(([k,v])=>k+'='+v).join('; ')};
  const photo = current.json.data.files[0];
  const image = await fetch(base+route+'download?fileId='+encodeURIComponent(photo.ID)+'&inline=true',{headers});
  check(image.status===200 && image.headers.get('content-type').startsWith('image/'),'uploaded image served inline');
  check((await image.arrayBuffer()).byteLength===Number(photo.FILE_SIZE),'photo bytes read intact');
  const response = await fetch(base+route+'export?year=2026&partyName='+encodeURIComponent('总结重做验收'),{headers});
  check(response.status===200 && response.headers.get('content-type').includes('spreadsheetml'),'HTTP XLSX with images');
  fs.writeFileSync('output/yzbyts-summary/浏览器记录导出.xlsx',Buffer.from(await response.arrayBuffer()));
  const all = await fetch(base+route+'export?year=2026',{headers});
  check(all.status===200 && all.headers.get('content-type').includes('spreadsheetml'),'existing plus new records export');
  fs.writeFileSync('output/yzbyts-summary/全部记录导出.xlsx',Buffer.from(await all.arrayBuffer()));
  fs.writeFileSync('output/yzbyts-summary/http-checks.json',JSON.stringify({checks},null,2));
  console.log('PASS '+checks.length+' HTTP checks');
})().catch(error=>{console.error(error.message);process.exit(1);});
