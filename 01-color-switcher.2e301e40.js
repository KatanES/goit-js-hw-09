document.addEventListener("DOMContentLoaded",function(){let t=document.body,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),d=null,o=!1;function a(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}e.addEventListener("click",function(){o||(o=!0,d=setInterval(a,1e3),e.disabled=!0,n.disabled=!1)}),n.addEventListener("click",function(){o&&(o=!1,clearInterval(d),e.disabled=!1,n.disabled=!0)})});
//# sourceMappingURL=01-color-switcher.2e301e40.js.map