(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){t.init()}));const t={init:function(e){this.holder=document.querySelectorAll(".qi-block-animated-text"),this.holder.length&&[...this.holder].map((i=>{t.initItem(i,e)}))},getRealCurrentItem:function(t){return"string"==typeof t&&""!==t&&(t=qiBlocksEditor.qodefGetCurrentBlockElement.get(t)),t},initItem:(e,i)=>{if(!(e=t.getRealCurrentItem(e)))return;let a=(n=10,r=400,Math.floor(Math.random()*(r-n)+n)),o=void 0!==e.getAttribute("data-appear-delay")&&null!==e.getAttribute("data-appear-delay")?e.getAttribute("data-appear-delay"):"";var n,r;t.initLetterAnimation(e);const l="object"!=typeof qiBlocksEditor?qiBlocks:qiBlocksEditor;i&&e.classList.remove("qodef--appeared"),o=o?"random"===o?a:o:0,l.qodefIsInViewport.check(e,(()=>{e.classList.contains("qodef--appeared")||setTimeout((function(){e.classList.add("qodef--appeared")}),o)}))},initLetterAnimation:t=>{if(t.classList.contains("qodef-animated-by--letter")){let e=t.querySelectorAll(".qodef-e-character");if(e.length<1)return;e.forEach(((e,i)=>{let a=t.classList.contains("qodef-appear--from-left")?40:60;e.style.transitionDelay=i*a+"ms"}))}}}})();