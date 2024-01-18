/*! For license information please see widgets.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.widgets=t(require("react")):e.widgets=t(e.React)}(self,(e=>{return t={615:function(e,t,a){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var r=i(a(812)),n=i(a(605)),d=i(a(967)),o=function(e){var t=e.name,a=e.units,i=void 0===a?"":a,o=e.value,c=e.mode,l=void 0===c?"default":c,u=e.preValue,s=e.baseline,f=void 0===s?0:s,m=e.value_min,v=e.value_max,p=e.target,N=e.inverted,g=void 0!==N&&N,b=e.showDiff,h=void 0===b||b,w=e.showTarget,E=void 0===w||w,k=e.showTargetDiff,x=void 0===k||k,M=e.valuePrecision,_=void 0===M?1:M,y=e.diffPrecision,P=void 0===y?1:y,D=e.targetPrecision,j=void 0===D?1:D,S=e.targetDiffPrecision,T=void 0===S?1:S,K=e.diffMethod,q=void 0===K?function(e,t){return(e-t)/t*100}:K,A=e.targetDiffMethod,I=void 0===A?function(e,t,a,i,r){return(e-a)/(t-a)*100}:A,O=e.targetDiffType,W=void 0===O?"default":O,B=e.enabled,F=void 0===B||B,R=e.id,V=u?q(o,u):Number.NaN,z=null;switch(W){case"variance":z=function(e,t,a,i,r){return(e-t)/t*100};break;case"performance":z=function(e,t,a,i,r){return(e-i)/(r-i)*100};break;case"user":z=I;break;default:z=function(e,t,a,i,r){return(e-a)/(t-a)*100}}var C=p?z(o,p,f,m,v):Number.NaN,G=(0,d.default)({"kpi-widget-container":!0,green:u&&F&&o>u,red:u&&F&&o<u,inf:u?o===u:F,inverted:g,compact:"compact"==l,disabled:!F}),H=(0,d.default)({"kpi-widget-value-diff":!0,green:u&&o>u,red:u&&o<u,inf:!u||o===u,inverted:g,disabled:!F,compact:"compact"==l}),J=(0,d.default)({"target-diff":"progress"==W||"default"==W||"user"==W||!W,"target-var":"variance"==W,"target-perf":"performance"==W}),L=(0,d.default)({"kpi-widget-value":!0,green:u&&o>u,red:u&&o<u,inf:!u||o===u,inverted:g,disabled:!F,compact:"compact"==l}),Q=r.default.createElement("div",{id:R,className:G},r.default.createElement("div",{className:"kpi-widget-caption-container"},i&&r.default.createElement("div",{className:"kpi-widget-caption-units"},i),r.default.createElement("div",{className:"kpi-widget-caption-title"},t)),r.default.createElement("div",{className:"kpi-widget-value-container"},r.default.createElement("div",{className:"kpi-widget-value"},(0,n.default)(o,_)),h&&r.default.createElement("div",{className:H},Number.isNaN(V)?"n/a":(V>0?"+":"")+(0,n.default)(V,P)+"%")),(E||x)&&r.default.createElement("div",{className:"kpi-widget-target-container"},E&&r.default.createElement("div",{className:"target"},void 0===p||Number.isNaN(p)?"---":(0,n.default)(p,j)),x&&r.default.createElement("div",{className:J},void 0===C||Number.isNaN(C)?"---":(0,n.default)(C,T)+"%"))),U=r.default.createElement("div",{id:R,className:G},r.default.createElement("div",{className:"kpi-widget-caption-container compact"},i&&r.default.createElement("div",{className:"kpi-widget-caption-units compact"},i),r.default.createElement("div",{className:"kpi-widget-caption-title compact"},t)),r.default.createElement("div",{className:"kpi-compact-container"},r.default.createElement("div",{className:"kpi-compact-left"},r.default.createElement("div",{className:L},(0,n.default)(o,_))),(E||x||h)&&r.default.createElement("div",{className:"kpi-compact-right"},h&&r.default.createElement("div",{className:H},Number.isNaN(V)?"n/a":(V>0?"+":"")+(0,n.default)(V,P)+"%"),E&&r.default.createElement("div",{className:"target"},void 0===p||Number.isNaN(p)?"---":(0,n.default)(p,j)),x&&r.default.createElement("div",{className:J},void 0===C||Number.isNaN(C)?"---":(0,n.default)(C,T)+"%"))));return"compact"==l?U:Q};o.defaultProps={},t.default=o},294:function(e,t,a){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,t.KPIWidget=void 0;var r=i(a(615));t.KPIWidget=r.default},605:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e,t){void 0===t&&(t=1);var a=["","K","M","B","T"],i=Math.abs(e),r=Math.min(Math.floor((i>1?Math.log10(i):0)/3),a.length-1),n=i/Math.pow(1e3,r),d=Math.max(t,0);return((i<Math.pow(10,-(d+1))?1:Math.sign(e))*n).toFixed(d)+a[r]}},812:t=>{"use strict";t.exports=e},967:(e,t)=>{var a;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=d(e,n(a)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)i.call(e,a)&&e[a]&&(t=d(t,a));return t}function d(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}},a={},function e(i){var r=a[i];if(void 0!==r)return r.exports;var n=a[i]={exports:{}};return t[i].call(n.exports,n,n.exports,e),n.exports}(294);var t,a}));