(()=>{"use strict";var e,t={513:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}const r=window.wp.element,o=window.wp.i18n,n=window.wp.blockEditor,a=JSON.parse('{"u2":"create-block/blocks-eqs"}');(0,e.registerBlockType)(a.u2,{attributes:{content:{type:"string",source:"html",selector:"h2"}},edit:function(e){let{attributes:a,setAttributes:s}=e;return(0,r.createElement)(n.RichText,t({},(0,n.useBlockProps)(),{tagName:"h2",value:a.content,allowedFormats:["core/bold","core/italic"],onChange:e=>s({content:e}),placeholder:(0,o.__)("Heading...")}))},save:function(){return(0,r.createElement)(RichText.Content,t({},n.useBlockProps.save(),{tagName:"h2",value:attributes.content}))}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],i=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[s,i,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var u=c(o)}for(t&&t(r);l<s.length;l++)a=s[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=globalThis.webpackChunkblocks_eqs=globalThis.webpackChunkblocks_eqs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[431],(()=>o(513)));n=o.O(n)})();