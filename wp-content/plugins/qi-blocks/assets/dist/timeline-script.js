(()=>{"use strict";var e={5311:e=>{e.exports=jQuery}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(5311),t=o.n(e);document.addEventListener("DOMContentLoaded",(function(){n.init()})),window.addEventListener("resize",(function(){n.init()}));const n={init:function(e){this.holder=document.querySelectorAll(".qi-block-timeline"),this.holder.length&&[...this.holder].map((t=>{n.initItem(t,e)}))},getRealCurrentItem:function(e){return"string"==typeof e&&""!==e&&(e=qiBlocksEditor.qodefGetCurrentBlockElement.get(e)),e},initItem:function(e,t){if(!(e=n.getRealCurrentItem(e)))return;const o="object"!=typeof qiBlocksEditor?qiBlocks:qiBlocksEditor;t&&e.classList.remove("qodef--appeared"),o.qodefWaitForImages.check(e,(function(){setTimeout((()=>{n.initLogic(e),"mount"===t&&setTimeout((()=>{qiBlocksEditor.qodefGetCurrentBlockElement.getCurrentDocument().body.addEventListener("qi_frame_resized",(()=>{n.initLogic(e)}))}),600),o.qodefIsInViewport.check(e,(function(){e.classList.add("qodef--appeared")}))}),t?800:0)}))},initLogic:function(e){const t=e.querySelector(".qodef-timeline-inner");if(e.classList.contains("qodef-timeline--horizontal")){let o=(document.body.classList.contains("wp-admin")?qiBlocksEditor.qodefGetCurrentBlockElement.getCurrentDocument():document).body,i=e.querySelectorAll(".qodef-e-item"),r=parseInt(e.offsetWidth,10),s=i?i.length:0,l=0,a=0,c=JSON.parse(e.getAttribute("data-options"));s>1&&(l=document.body.classList.contains("wp-admin")?o.classList.contains("qi-preview-screen-tablet")?r/parseInt(c.colNum1024,10):o.classList.contains("qi-preview-screen-mobile")?r/parseInt(c.colNum480,10):r/parseInt(c.colNum,10):qiBlocks.windowWidth>1440?r/parseInt(c.colNum,10):qiBlocks.windowWidth>1366?r/parseInt(c.colNum1440,10):qiBlocks.windowWidth>1024?r/parseInt(c.colNum1366,10):qiBlocks.windowWidth>768?r/parseInt(c.colNum1024,10):qiBlocks.windowWidth>680?r/parseInt(c.colNum768,10):qiBlocks.windowWidth>480?r/parseInt(c.colNum680,10):r/parseInt(c.colNum480,10),a=l*s,e.setAttribute("data-movement",l),e.setAttribute("data-moved",0),t.style.width=a+"px",t.style.transform="translateX(0)",n.initHeight(e),n.initMovement(e))}else t.style.width="auto",t.style.transform="none",n.initHeight(e)},initMovement:function(e){let o=parseInt(e.getAttribute("data-movement"),10),n=e.querySelector(".qodef-timeline-inner"),i=parseInt(e.offsetWidth,10),r=n?parseInt(n.clientWidth,10):0,s=e.querySelector(".qodef-nav-prev"),l=e.querySelector(".qodef-nav-next");t()(s).off().on("click",(t=>{t.preventDefault();const i=parseFloat(e.getAttribute("data-moved"));if(i<-1){const t=i+o;n.style.transform="translateX( "+t+"px)",e.setAttribute("data-moved",t)}})),t()(l).off().on("click",(t=>{t.preventDefault();const s=parseFloat(e.getAttribute("data-moved"));if(r-i+1>-s+o){const t=s-o;n.style.transform="translateX( "+t+"px)",e.setAttribute("data-moved",t)}}))},initHeight:function(e){let t=e.querySelectorAll(".qodef-e-item"),o=0,n=0;if(t.length&&(t.forEach((t=>{const i=t.querySelector(".qodef-e-content-holder"),r=t.querySelector(".qodef-e-top-holder");r&&i&&(i.style.height="auto",r.style.height="auto");let s=i?parseInt(window.getComputedStyle(i).getPropertyValue("height"),10):0,l=r?parseInt(window.getComputedStyle(r).getPropertyValue("height"),10):0;e.classList.contains("qodef-timeline-layout--horizontal-standard")?(l>o&&(o=l),s>n&&(n=s)):e.classList.contains("qodef-timeline-layout--horizontal-alternating")&&(s<l&&(s=l),s>n&&(n=s))})),t.forEach((t=>{let i=t.querySelector(".qodef-e-content-holder"),r=t.querySelector(".qodef-e-top-holder"),s=t.querySelector(".qodef-e-line-holder");e.classList.contains("qodef-timeline-layout--horizontal-standard")?(r&&(r.style.height=o+"px"),i&&(i.style.height=n+"px"),s&&(s.style.top=o+"px")):e.classList.contains("qodef-timeline-layout--horizontal-alternating")&&(r&&(r.style.height=n+"px"),i&&(i.style.height=n+"px"))}))),e.classList.contains("qodef-timeline-layout--horizontal-standard")){let t=e.querySelector(".qodef-nav-prev"),n=e.querySelector(".qodef-nav-next");t&&(t.style.top=o+"px"),n&&(n.style.top=o+"px")}}}})()})();