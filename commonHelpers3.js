import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as s}from"./assets/throttled-set-item-ce0fdfc7.js";import"./assets/vendor-1e54b975.js";const o="feedback-form-state",e=document.querySelector(".feedback-form"),m=e.querySelector('input[name="email"]'),r=e.querySelector('textarea[name="message"]'),a=localStorage.getItem(o);if(a){const t=JSON.parse(a);m.value=t.email,r.value=t.message}e.addEventListener("input",()=>{s(o,JSON.stringify({email:m.value,message:r.value}))});
//# sourceMappingURL=commonHelpers3.js.map
