!function(){"use strict";const t="pg",e={[t]:1,fe:!0,id:0,fc:"",dt:""},s="wp-block-kadence-query-pagination",r="wp-block-kadence-query-result-count",i="kb-query-loaded",n="kb-query-filter-update",o="kb-query-filter-trigger";class l{queryBlock;root;constructor(t){this.queryBlock=t,this.root=t.root,this.attachListeners(),window.addEventListener(i,this.attachListeners.bind(this)),window.addEventListener(i,this.setUrlParams.bind(this))}setUrlParams(e){if(!0!==e&&e.qlID&&e.qlID!=this.queryBlock.rootID)return;const s=new URL(window.location.href);1<this.queryBlock.queryResults.page&&(s.searchParams.set(t,this.queryBlock.queryResults.page),history.pushState(null,"",window.location.pathname+"?"+s.searchParams.toString())),1==this.queryBlock.queryResults.page&&(s.searchParams.delete(t),s.searchParams.toString()?history.pushState(null,"",window.location.pathname+"?"+s.searchParams.toString()):history.pushState(null,"",window.location.pathname))}replaceHtml(t){0!==Object.keys(t).length?Object.entries(t).forEach((t=>{const[e,r]=t;this.root.querySelector("."+s+e).innerHTML=r})):this.root.querySelectorAll("."+s).forEach((function(t){t.innerHTML=""}))}attachListeners(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!0!==t&&t.qlID&&t.qlID!=this.queryBlock.rootID)return;const e=this;var s=this.root.querySelectorAll(".page-numbers");for(let t=0;t<s.length;t++)s[t].addEventListener("click",this.paginate.bind(e))}paginate(e){e.preventDefault(),"page"in e.target.dataset&&(this.queryBlock.queryArgs[t]=Number(e.target.dataset.page),this.queryBlock.newLoad(),this.root.querySelector(".wp-block-kadence-query-card").scrollIntoView({block:"start",behavior:"smooth"}))}}class a{queryBlock;root;constructor(t){this.queryBlock=t,this.root=t.root,this.setFilterShown(),window.addEventListener(i,this.setFilterShown.bind(this))}replaceHtml(t){0!==Object.keys(t).length?Object.entries(t).forEach((t=>{const[e,s]=t;this.root.querySelector("."+r+e).innerHTML=s})):this.root.querySelectorAll("."+r).forEach((function(t){t.innerHTML=""}))}setFilterShown(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!0!==t&&t.qlID&&t.qlID!=this.queryBlock.rootID)return;const e=this,s=e.queryBlock.components.filters.getFirstFilter(!0);e.root.querySelectorAll("."+r).forEach((function(t){let r=!1;"showFilter"in t.dataset&&t.dataset.showFilter&&(r=!0),r&&e.queryBlock.queryResults&&e.queryBlock.queryResults.resultCount>0&&(t.querySelector(".show-filter").innerHTML=s?" in "+s:"")}))}attachListeners(){}}class u{queryBlock;root;constructor(t){this.queryBlock=t,this.root=t.root.querySelector(".wp-block-kadence-query-noresults"),window.addEventListener(i,this.setVisibility.bind(this))}setVisibility(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!0!==t&&t.qlID&&t.qlID!=this.queryBlock.rootID||this.root&&(1>this.queryBlock.queryResults.postCount?this.root.classList.add("active"):this.root.classList.remove("active"))}}class h{queryBlock;root;uniqueID;hash;isUnique=!0;lastUpdated;type;constructor(t,e){if(this.constructor==h)throw new Error("Abstract classes can't be instantiated.");this.queryBlock=t,this.root=e,this.uniqueID=this.root.dataset.uniqueid,this.hash=this.root.dataset.hash,this.lastUpdated=Date.now()}getValue(){throw new Error("Method 'getValue()' must be implemented.")}reset(){throw new Error("Method 'reset()' must be implemented.")}setValue(){throw new Error("Method 'setValue()' must be implemented.")}prefill(){if(this.hash){const t=window.location.search,e=new URLSearchParams(t);e.has(this.hash)?this.setValue(e.get(this.hash)):"buttons"==this.type&&this.setValue("")}}triggerUpdated(){this.lastUpdated=Date.now();var t=new Event(n,{bubbles:!0});t.qlID=this.queryBlock.rootID,this.root.dispatchEvent(t)}triggerReset(){var t=new Event(o,{bubbles:!0});t.qlID=this.queryBlock.rootID,this.root.dispatchEvent(t)}}class c extends h{input;constructor(t,e){return super(t,e),this.input=this.root.querySelector(".kb-filter"),this.type="dropdown",this.attachListeners(),this.prefill(),this}getValue(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.input&&"undefined"!=this.input.value&&""!=this.input.value?t?this.input.value:{[this.hash]:this.input.value}:t?"":{[this.hash]:""}}reset(){this.input.value=""}setValue(t){this.input.value=t}attachListeners(){this.input&&this.input.addEventListener("change",this.triggerUpdated.bind(this))}}class d extends h{inputWrap;constructor(t,e){return super(t,e),this.inputWrap=this.root.querySelector(".kadence-filter-wrap"),this.type="checkbox",this.attachListeners(),this.prefill(),this}getValue(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.inputWrap.querySelectorAll('input[type="checkbox"]:checked');if(e.length>0){var s="";return e.forEach((function(t){t.value&&(s=s?s+","+t.value:t.value)})),t?s:{[this.hash]:s}}return t?"":{[this.hash]:""}}reset(){let t=this.inputWrap.querySelectorAll('input[type="checkbox"]');t.length>0&&t.forEach((function(t){t.checked=!1}))}setValue(t){const e=t?t.split(","):[];let s=this.inputWrap.querySelectorAll('input[type="checkbox"]');s.length>0&&s.forEach((function(t){e.includes(t.value)&&(t.checked=!0)}))}attachListeners(){const t=this;let e=this.inputWrap.querySelectorAll('input[type="checkbox"]');e.length>0&&e.forEach((function(e){e.addEventListener("change",t.triggerUpdated.bind(t))}))}}class p extends h{inputWrap;constructor(t,e){return super(t,e),this.inputWrap=this.root.querySelector(".kadence-filter-wrap"),this.type="buttons",this.attachListeners(),this.prefill(),this}getValue(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.inputWrap.querySelectorAll("button[aria-pressed]");if(e.length>0){var s="";return e.forEach((function(t){let e=t.dataset.value?t.dataset.value:"";e&&(s=s?s+","+e:e)})),t?s:{[this.hash]:s}}return t?"":{[this.hash]:""}}reset(){let t=this.inputWrap.querySelectorAll("button");t.length>0&&t.forEach((function(t){t.removeAttribute("aria-pressed"),t.classList.remove("pressed")}))}setValue(t){const e=t?t.split(","):[];let s=this.inputWrap.querySelectorAll("button");s.length>0&&s.forEach((function(s){let r=s.dataset.value?s.dataset.value:"";(e.includes(r)||""==t&&""==r)&&(s.setAttribute("aria-pressed","true"),s.classList.add("pressed"))}))}triggerButtonPress(t){t.preventDefault();const e=t.target,s=e.classList.contains("pressed");this.reset(),s?this.setValue(""):(e.setAttribute("aria-pressed",!0),e.classList.add("pressed")),this.triggerUpdated()}attachListeners(){const t=this;let e=this.inputWrap.querySelectorAll("button");e.length>0&&e.forEach((function(e){e.addEventListener("click",t.triggerButtonPress.bind(t))}))}}class y extends h{input;constructor(t,e){return super(t,e),this.input=this.root.querySelector(".kb-filter-date"),this.type="date",this.attachListeners(),this.prefill(),this}getValue(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.input&&"undefined"!=this.input.value&&""!=this.input.value?t?this.input.value:{[this.hash]:this.input.value}:t?"":{[this.hash]:""}}reset(){this.input.value=""}setValue(t){this.input.value=t}attachListeners(){this.input&&this.input.addEventListener("change",this.triggerUpdated.bind(this))}}class q extends h{button;constructor(t,e){return super(t,e),this.button=this.root.querySelector(".kb-query-filter-reset-button"),this.type="reset",this.attachListeners(),this}getValue(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?"":{}}reset(){return{}}setValue(t){return null}prefill(){return null}attachListeners(){this.button&&this.button.addEventListener("click",this.triggerReset.bind(this))}}class f extends h{input;constructor(t,e){return super(t,e),this.input=this.root.querySelector(".kb-sort"),this.isUnique=!1,this.type="sort",this.attachListeners(),this.prefill(),this}getValue(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this.queryBlock.rootID+"_sort";return this.input&&"undefined"!=this.input.value&&""!=this.input.value?t?this.input.value:{[e]:this.input.value}:t?"":{[e]:""}}reset(){this.input.value=""}setValue(t){this.input.value=t}prefill(){const t=this.queryBlock.rootID+"_sort";if(t){const e=window.location.search,s=new URLSearchParams(e);s.has(t)&&this.setValue(s.get(t))}}attachListeners(){this.input&&this.input.addEventListener("change",this.triggerUpdated.bind(this))}}class g extends h{input;constructor(t,e){return super(t,e),this.input=this.root.querySelector(".kb-filter-search"),this.button=this.root.querySelector(".kb-filter-search-btn"),this.isUnique=!1,this.type="search",this.attachListeners(),this.prefill(),this}getValue(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this.queryBlock.rootID+"_search";return this.input&&"undefined"!=this.input.value&&""!=this.input.value?t?this.input.value:{[e]:this.input.value}:t?"":{[e]:""}}reset(){this.input.value=""}setValue(t){this.input.value=t}prefill(){const t=this.queryBlock.rootID+"_search";if(t){const e=window.location.search,s=new URLSearchParams(e);s.has(t)&&this.setValue(s.get(t))}}attachListeners(){const t=this;this.input&&(this.button.addEventListener("click",this.triggerUpdated.bind(t)),this.input.addEventListener("keyup",(function(e){"Enter"!==e.key&&13!==e.keyCode||t.triggerUpdated()})))}}class k{queryBlock;root;filters={};filterValues={};previousFilterValues={};constructor(t){const e=this;this.queryBlock=t,this.root=t.root,this.initializeFilters(),window.addEventListener(n,this.runFilters.bind(e)),window.addEventListener(o,this.resetFilters.bind(e)),window.addEventListener("kb-query-filter-trigger",this.runFilters.bind(e))}initializeFilters(){const t=this;this.root.querySelectorAll(".kadence-query-filter").forEach((function(e){if("uniqueid"in e.dataset){let s=e.dataset.uniqueid;e.classList.contains("wp-block-kadence-query-filter-date")?t.filters[s]=new y(t.queryBlock,e):e.classList.contains("wp-block-kadence-query-filter")?t.filters[s]=new c(t.queryBlock,e):e.classList.contains("wp-block-kadence-query-filter-reset")?t.filters[s]=new q(t.queryBlock,e):e.classList.contains("wp-block-kadence-query-sort")?t.filters[s]=new f(t.queryBlock,e):e.classList.contains("wp-block-kadence-query-filter-search")?t.filters[s]=new g(t.queryBlock,e):e.classList.contains("wp-block-kadence-query-filter-checkbox")?t.filters[s]=new d(t.queryBlock,e):e.classList.contains("wp-block-kadence-query-filter-buttons")&&(t.filters[s]=new p(t.queryBlock,e))}}))}setUrlParams(){const t=new URL(location.protocol+"//"+location.host+location.pathname),e=Object.keys(this.filterValues);for(let s=0;s<e.length;s++){const r=e[s],i=this.filterValues[r];i&&t.searchParams.set(r,i)}t.searchParams.toString()?history.pushState(null,"",window.location.pathname+"?"+t.searchParams.toString()):history.pushState(null,"",window.location.pathname)}runFilters(){let s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!0!==s&&s.qlID&&s.qlID!=this.queryBlock.rootID)return;this.previousFilterValues=this.filterValues,this.filterValues={},this.queryBlock.queryArgs[t]=e[t];let r=Object.keys(this.filters);var i={};for(let t=0;t<r.length;t++){const e=r[t],s=this.filters[e];if(s.isUnique){const t=s.getValue();this.filterValues={...this.filterValues,...t}}else i[s.type]=void 0===i[s.type]?[]:i[s.type],i[s.type].push(s)}let n=Object.keys(i);for(let t=0;t<n.length;t++){const e=i[n[t]];var o=null,l=0;e.forEach((function(t){l<t.lastUpdated&&(l=t.lastUpdated,o=t)}));const s=o.getValue();e.forEach((function(t){t!==o&&t.setValue(Object.values(s)[0])}));const r=s;this.filterValues={...this.filterValues,...r}}if(JSON.stringify(this.filterValues)!==JSON.stringify(this.previousFilterValues)){const t=Object.keys(this.filterValues);for(let e=0;e<t.length;e++){const s=t[e],r=this.filterValues[s];r?this.queryBlock.queryArgs[s]=r:delete this.queryBlock.queryArgs[s]}this.setUrlParams(),this.queryBlock.newLoad()}}resetFilters(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!0!==t&&t.qlID&&t.qlID!=this.queryBlock.rootID)return;let e=Object.keys(this.filters);for(let t=0;t<e.length;t++){const s=e[t];this.filters[s].reset()}this.runFilters()}mergeFilterValue(t){const e=Object.keys(t);for(let s=0;s<e.length;s++){const r=e[s],i=t[r];r in this.filterValues?"array"==typeof this.filterValues[r]?this.filterValues[r]="array"==typeof i?[...this.filterValues[r],...i]:[...this.filterValues[r],i]:this.filterValues[r]=this.filterValues[r]+i.toString():this.filterValues[r]=i}}getFirstFilter(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=["search"];let s=Object.keys(this.filters);for(let r=0;r<s.length;r++){const i=s[r],n=this.filters[i];let o="";if(o=t?n.getValue(!0):n.getValue(),o&&e.includes(n.type))return o}return""}}class v{components={};queryArgs={};#t;queryResults={};root;rootID;constructor(t){const e=this;this.root="string"==typeof t?document.querySelector(t):t,this.rootID=this.root.dataset.id,this.#t=1,this.components.pagination=new l(e),this.components.noResults=new u(e),this.components.filters=new k(e),this.components.resultCount=new a(e),this.queryArgs=this.parseDataArgs();var s=new Event("kb-query-mounted",{bubbles:!0});s.qlID=this.rootID,this.root.dispatchEvent(s)}parseDataArgs(){var t=this.root.dataset.id;return{...e,id:t}}newLoad(){var t=this.root.querySelector(".wp-block-kadence-query-card .kb-query-grid-wrap");this.markLoading();const e=this;this.query().then((function(s){if(s){t.innerHTML=s.posts.join(""),e.components.pagination.replaceHtml(s.pagination),e.components.resultCount.replaceHtml(s.resultCount);var r=new Event(i,{bubbles:!0});r.qlID=e.rootID,e.root.dispatchEvent(r)}e.markLoading(!0)}),(function(t){console.log("error",t)}))}markLoading(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=this.root,s=(e.querySelector(".wp-block-kadence-query-card"),e.querySelectorAll(".kb-query-item"));t?e.classList.remove("loading"):e.classList.add("loading");for(let e=0;e<s.length;e++){const r=s[e];setTimeout((()=>{t?r.classList.remove("loading"):r.classList.add("loading")}),100*(e+1))}}async query(){this.startQuery();const t=this.root,e=this.queryArgs.id,s={method:"GET"},r=t.querySelector("input[name='"+e+"_wp_query_hash']"),i=t.querySelector("input[name='"+e+"_wp_query_vars']");r&&i&&(s.method="POST",s.body=JSON.stringify({[this.queryArgs.id+"_wp_query_hash"]:r.value,[this.queryArgs.id+"_wp_query_vars"]:i.value}));try{const t=new URLSearchParams(this.queryArgs),e=await fetch("/wp-json/wp/v2/kadence_query/query?"+t,s);if(200==e.status){let t=await e.json();return this.queryResults=t,t}}finally{this.endQuery()}}startQuery(){}endQuery(){}get state(){return this.#t}set state(t){this.#t=t;var e=new Event("kb-query-state");e.val=t,e.qlID=this.queryBlock.rootID,this.root.dispatchEvent(e)}}window.KBQuery=v;const w=()=>{window.KBQueryBlocks=[];var t=document.querySelectorAll(".kadence-query-init");for(let s=0;s<t.length;s++){var e=t[s];const r=new v(e);window.KBQueryBlocks.push(r)}};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",w):w()}();