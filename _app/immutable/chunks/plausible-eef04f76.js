import{C as y,z as b}from"./state-15c8abc2.js";function m(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var v={};function _(n,e,t){const r=/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname)||location.protocol==="file:";if(!e.trackLocalhost&&r)return console.warn("[Plausible] Ignoring event because website is running locally");try{if(window.localStorage.plausible_ignore==="true")return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage')}catch{}const a={n,u:e.url,d:e.domain,r:e.referrer,w:e.deviceWidth,h:e.hashMode?1:0,p:t&&t.props?JSON.stringify(t.props):void 0},l=new XMLHttpRequest;l.open("POST",`${e.apiHost}/api/event`,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(a)),l.onreadystatechange=()=>{l.readyState===4&&t&&t.callback&&t.callback()}}function k(n){const e=()=>({hashMode:!1,trackLocalhost:!1,url:location.href,domain:location.hostname,referrer:document.referrer||null,deviceWidth:window.innerWidth,apiHost:"https://plausible.io",...n}),t=(i,s,c)=>{_(i,{...e(),...c},s)},r=(i,s)=>{t("pageview",s,i)};return{trackEvent:t,trackPageview:r,enableAutoPageviews:()=>{const i=()=>r(),s=history.pushState;return s&&(history.pushState=function(c,f,u){s.apply(this,[c,f,u]),i()},addEventListener("popstate",i)),n&&n.hashMode&&addEventListener("hashchange",i),r(),function(){s&&(history.pushState=s,removeEventListener("popstate",i)),n&&n.hashMode&&removeEventListener("hashchange",i)}},enableAutoOutboundTracking:(i=document,s={subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]})=>{function c(o){t("Outbound Link: Click",{props:{url:this.href}}),typeof process<"u"&&process,setTimeout(()=>{location.href=this.href},150),o.preventDefault()}const f=new Set;function u(o){o instanceof HTMLAnchorElement?o.host!==location.host&&(o.addEventListener("click",c),f.add(o)):"querySelectorAll"in o&&o.querySelectorAll("a").forEach(u)}function h(o){o instanceof HTMLAnchorElement?(o.removeEventListener("click",c),f.delete(o)):"querySelectorAll"in o&&o.querySelectorAll("a").forEach(h)}const g=new MutationObserver(o=>{o.forEach(p=>{p.type==="attributes"?(h(p.target),u(p.target)):p.type==="childList"&&(p.addedNodes.forEach(u),p.removedNodes.forEach(h))})});return i.querySelectorAll("a").forEach(u),g.observe(i,s),function(){f.forEach(p=>{p.removeEventListener("click",c)}),f.clear(),g.disconnect()}}}}const S=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),E=y(S);var d=b&&b.__assign||function(){return d=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},d.apply(this,arguments)},L=b&&b.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(v,"__esModule",{value:!0});var O=L(E),w={enabled:!0};function P(n){var e={plausible:null};return{name:"plausible-analytics",config:d(d({},w),n),initialize:function(t){var r=t.config,a=r.apiHost,l=r.domain,i=r.hashMode,s=r.trackLocalhost,c={apiHost:a,domain:l,hashMode:i,trackLocalhost:s};e.plausible=O.default(Object.keys(c).reduce(function(f,u){var h;return typeof c[u]<"u"?d(d({},f),(h={},h[u]=c[u],h)):f},{}))},loaded:function(){return Boolean(e.plausible)},page:function(t){var r=t.payload;if(!!e.plausible){var a=r.properties;e.plausible.trackPageview({},{props:a})}},track:function(t){var r=t.payload;if(!!e.plausible){var a=r.properties,l=r.event;e.plausible.trackEvent(l,{props:a})}}}}var M=v.default=P;const j=m({__proto__:null,default:M},[v]);export{j as p};
