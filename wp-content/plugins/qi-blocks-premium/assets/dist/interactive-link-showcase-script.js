(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){e.init()}));const e={init:function(){this.holder=document.querySelectorAll(".qi-block-interactive-link-showcase"),this.holder.length&&[...this.holder].map((t=>{e.initItem(t)}))},getRealCurrentItem:function(e){return"string"==typeof e&&""!==e&&(e=qiBlocksEditor.qodefGetCurrentBlockElement.get(e)),e},initItem:function(t){if(!(t=e.getRealCurrentItem(t)))return;const i=t.querySelectorAll(".qodef-m-image"),o=t.querySelectorAll(".qodef-m-item");i.length&&o.length&&o.forEach(((e,s)=>{e.classList.remove("qodef--active"),i[s]&&i[s].classList.remove("qodef--active"),0===s&&(e.classList.add("qodef--active"),i[s]&&i[s].classList.add("qodef--active")),["mouseenter","touchstart","mouseleave","touchend"].forEach((c=>{e.addEventListener(c,(function(){t.classList.contains("qodef--active")||(o.forEach(((e,t)=>{e.classList.remove("qodef--active"),i[t].classList.remove("qodef--active")})),o[s].classList.add("qodef--active"),i[s]&&i[s].classList.add("qodef--active"))}))}))})),t.classList.add("qodef--init")}}})();