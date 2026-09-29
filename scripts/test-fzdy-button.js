/* Runs the actual PB AJAX wrapper plus the new button, with a small jqGrid/layer harness. */
const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
let selected = [], rows = {}, requests = [], messages = [], refreshes = 0;
const button = {disabled: false, attrs: {}, classes: new Set()};
const grid = {length: 1, jqGrid(method, id) { return method === 'getGridParam' ? selected : rows[id]; },
    trigger(event) { assert.equal(event, 'reloadGrid'); refreshes++; }};
function $(value) {
    if (value === grid) return grid;
    if (value == null) return {length: 0};
    if (value === '<span>') return {value: '', text(text) { this.value = text; return this; },
        html() { return this.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }};
    assert.equal(value, button);
    return {prop(key, v) { button[key] = v; return this; }, attr(key, v) { button.attrs[key] = v; return this; },
        removeAttr(key) { delete button.attrs[key]; return this; }, addClass(c) { button.classes.add(c); return this; },
        removeClass(c) { button.classes.delete(c); return this; }};
}
$.extend = Object.assign;
$.each = (items, callback) => { for (const key of Object.keys(items)) if (callback(key, items[key]) === false) break; };
$.ajax = options => requests.push(options);
const context = {window: {}, document: {getElementById: id => id === 'fzdyGrid' ? grid : null}, jQuery: $, $,
    layer: {alert: m => messages.push(m), msg: m => messages.push(m), confirm: m => messages.push(m), load() {}, close() {}}};
vm.createContext(context);
vm.runInContext(fs.readFileSync('WebRoot/static/h5/common-ext/avic.ajax.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('WebRoot/avicit/pb/fzdy/FzdyConversion.js', 'utf8'), context);
const click = () => context.window.fzdyConvertSelected('fzdyGrid', button);
click(); assert.equal(requests.length, 0); assert.match(messages.pop(), /请选择/);
selected = ['row']; rows.row = {}; click(); assert.equal(requests.length, 0); assert.match(messages.pop(), /隐藏列/);
rows.row = {ID: 'business-id', XM: 'not submitted'}; click();
assert.equal(requests.length, 1); assert.equal(button.disabled, true); assert.equal(button.attrs['aria-disabled'], 'true');
assert.equal(requests[0].data, '["business-id"]'); assert.equal(requests[0].type, 'POST');
assert.equal(requests[0].url, 'platform/avicit/pb/fzdy/conversion/convert');
click(); assert.equal(requests.length, 1); // no second request while in flight
requests[0].success({ok: true, success: 1, skipped: 0, failed: 0,
    results: [{id: 'business-id', name: '<img src=x onerror=alert(1)>', message: '已转换'}]});
assert.ok(!messages[messages.length - 1].includes('<img')); assert.ok(messages.pop().includes('&lt;img'));
requests[0].complete(); assert.equal(button.disabled, false); assert.equal(refreshes, 1);
click(); const fail = requests[1];
const before = messages.length;
fail.error({responseText: '{"ok":false}', responseJSON: {message: '没有操作权限'}}, 'error');
assert.equal(messages.length, before + 1); assert.equal(messages.pop(), '没有操作权限');
fail.complete(); assert.equal(button.disabled, false); assert.equal(refreshes, 2);
click(); const timeout = requests[2]; timeout.error({responseText: ''}, 'timeout');
assert.match(messages.pop(), /部分记录转换成功/); timeout.complete(); assert.equal(refreshes, 3);
selected = Array(201).fill('row'); click(); assert.equal(requests.length, 3); assert.match(messages.pop(), /200/);
console.log('PASS: button selection, payload, double-click prevention, escaped results, permission/network errors and refresh.');
