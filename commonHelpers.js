import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as d,i as m}from"./assets/vendor-77e16229.js";const n=document.querySelector("[data-start]"),f=document.querySelector("#datetime-picker"),e=document.querySelectorAll(".value");let a=null,o;function p(){const t=a-new Date;if(t<=0){clearInterval(o),e.forEach(u=>u.textContent="00");return}const s=Math.floor(t/(1e3*60*60*24)),c=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),i=Math.floor(t%(1e3*60*60)/(1e3*60)),l=Math.floor(t%(1e3*60)/1e3);e[0].textContent=s.toString().padStart(2,"0"),e[1].textContent=c.toString().padStart(2,"0"),e[2].textContent=i.toString().padStart(2,"0"),e[3].textContent=l.toString().padStart(2,"0")}const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){a=new Date(r[0]),D()}};d("#datetime-picker",S);function D(){a<new Date?(m.error({title:"Error",message:"Please choose a date in the future",closeOnEscape:!0,position:"center"}),n.disabled=!0):n.disabled=!1}class h{start(){o=setInterval(p,1e3),n.disabled=!0,f.disabled=!0}}const v=new h;n.addEventListener("click",()=>{v.start()});
//# sourceMappingURL=commonHelpers.js.map