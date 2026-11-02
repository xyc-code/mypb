// Regression for the public ZIP's lost avicAjax receiver, using the real platform wrapper.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const {execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');
const file='WebRoot/static/pb-modern/bpm-batch-complete/bpm-batch-complete.js';
const platform=fs.readFileSync(path.join(root,'WebRoot/static/h5/common-ext/avic.ajax.js'),'utf8');
function exercise(source){
 let click,requests=[],messages=[],reloads=0;
 const element={length:1,find(){return this;},prepend(){return this;},text(){return this;},on(event,fn){click=fn;return this;},jqGrid(){return ['form1','form2'];},trigger(){reloads++;}};
 const $=selector=>selector==='#pbBpmBatchCompleteButton'?{length:0}:element;
 $.ajax=request=>{requests.push({url:request.url,type:request.type,data:request.data});request.success({flag:'success',completed:2});};
 $.each=(object,fn)=>Object.keys(object).forEach(key=>fn(key,object[key]));$.extend=Object.assign;
 const context={jQuery:$,$,layer:{msg(text){messages.push(text);},confirm(text,options,fn){fn(1);},close(){},load(){return 1;}}};
 context.window=context;vm.createContext(context);vm.runInContext(platform,context);vm.runInContext(source,context);
 assert.equal(context.PbBpmBatchComplete.attach({gridId:'grid',toolbarId:'toolbar'}),true);
 let error=null;try{click();}catch(e){error=e.message;}
 return{error,requests,messages,reloads};
}
const old=exercise(execFileSync('git',['show','0201780:'+file],{cwd:root,encoding:'utf8'}));
assert(old.error&&old.error.includes('this._ is not a function'));assert.equal(old.requests.length,0);
const current=exercise(fs.readFileSync(path.join(root,file),'utf8'));
assert.equal(current.error,null);assert.equal(current.requests.length,1);assert.equal(current.requests[0].type,'POST');
assert.equal(current.requests[0].data.ids,'form1,form2');assert.equal(current.reloads,1);
console.log(JSON.stringify({oldPublicPackage:old,currentSource:current,result:'PASS'},null,2));
