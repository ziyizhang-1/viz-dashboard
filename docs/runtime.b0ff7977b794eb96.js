(()=>{"use strict";var e,v={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,o,d)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,o,d]=e[i],s=!0,u=0;u<t.length;u++)(!1&d||a>=d)&&Object.keys(r.O).every(b=>r.O[b](t[u]))?t.splice(u--,1):(s=!1,d<a&&(a=d));if(s){e.splice(i--,1);var f=o();void 0!==f&&(n=f)}}return n}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[t,o,d]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+".93c51fa1f3c51f77.js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="angular-dashboard-demo:";r.l=(t,o,d,i)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==d)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var l=u[f];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+d){a=l;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+d),a.src=r.tu(t)),e[t]=[o];var c=(h,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(_=>_(b)),h)return h(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(o,d)=>{var i=r.o(e,o)?e[o]:void 0;if(0!==i)if(i)d.push(i[2]);else if(666!=o){var a=new Promise((l,c)=>i=e[o]=[l,c]);d.push(i[2]=a);var s=r.p+r.u(o),u=new Error;r.l(s,l=>{if(r.o(e,o)&&(0!==(i=e[o])&&(e[o]=void 0),i)){var c=l&&("load"===l.type?"missing":l.type),p=l&&l.target&&l.target.src;u.message="Loading chunk "+o+" failed.\n("+c+": "+p+")",u.name="ChunkLoadError",u.type=c,u.request=p,i[1](u)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var n=(o,d)=>{var u,f,[i,a,s]=d,l=0;if(i.some(p=>0!==e[p])){for(u in a)r.o(a,u)&&(r.m[u]=a[u]);if(s)var c=s(r)}for(o&&o(d);l<i.length;l++)r.o(e,f=i[l])&&e[f]&&e[f][0](),e[f]=0;return r.O(c)},t=self.webpackChunkangular_dashboard_demo=self.webpackChunkangular_dashboard_demo||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();