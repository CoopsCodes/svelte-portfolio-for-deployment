function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function b(t){return v(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function E(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function j(t,e){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.context.set(t,e)}const A=[],P=[],R=[],L=[],C=Promise.resolve();let k=!1;function N(t){R.push(t)}let O=!1;const q=new Set;function U(){if(!O){O=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];x(e),I(e.$$)}for(A.length=0;P.length;)P.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];q.has(e)||(q.add(e),e())}R.length=0}while(A.length);for(;L.length;)L.pop()();k=!1,O=!1,q.clear()}}function I(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const M=new Set;let D;function H(){D={r:0,c:[],p:D}}function T(){D.r||s(D.c),D=D.p}function B(t,e){t&&t.i&&(M.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),D.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function V(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const c=t[o],a=e[o];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in c)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function K(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:i}=t.$$;c&&c.m(e,r),N(()=>{const e=a.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(N)}function W(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(A.push(t),k||(k=!0,C.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,n,o,c,a,l,i=[-1]){const u=w;x(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let d=!1;p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),d&&X(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l($(n.target)):p.fragment&&p.fragment.c(),n.intro&&B(e.$$.fragment),G(e,n.target,n.anchor),U()),x(u)}class Q{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,a=t){const l=[c,a];return s.push(l),1===s.length&&(r=n(o)||t),c(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(e){let n,r,s,o,c,a,f,m,_,S,w,x,j,A,P,R,L;return{c(){n=p("nav"),r=p("ul"),s=p("li"),o=p("a"),c=d("home"),a=h(),f=p("li"),m=p("a"),_=d("projects"),S=h(),w=p("li"),x=p("a"),j=d("resume"),A=h(),P=p("li"),R=p("a"),L=d("contact me"),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=$(n);r=y(e,"UL",{class:!0});var l=$(r);s=y(l,"LI",{class:!0});var i=$(s);o=y(i,"A",{href:!0,class:!0});var p=$(o);c=v(p,"home"),p.forEach(u),i.forEach(u),a=b(l),f=y(l,"LI",{class:!0});var d=$(f);m=y(d,"A",{href:!0,class:!0});var h=$(m);_=v(h,"projects"),h.forEach(u),d.forEach(u),S=b(l),w=y(l,"LI",{class:!0});var g=$(w);x=y(g,"A",{href:!0,class:!0});var E=$(x);j=v(E,"resume"),E.forEach(u),g.forEach(u),A=b(l),P=y(l,"LI",{class:!0});var C=$(P);R=y(C,"A",{href:!0,class:!0});var k=$(R);L=v(k,"contact me"),k.forEach(u),C.forEach(u),l.forEach(u),e.forEach(u),this.h()},h(){g(o,"href","."),g(o,"class","svelte-1tkryed"),E(o,"selected",void 0===e[0]),g(s,"class","svelte-1tkryed"),g(m,"href","projects"),g(m,"class","svelte-1tkryed"),E(m,"selected","projects"===e[0]),g(f,"class","svelte-1tkryed"),g(x,"href","resume"),g(x,"class","svelte-1tkryed"),E(x,"selected","resume"===e[0]),g(w,"class","svelte-1tkryed"),g(R,"href","contactMe"),g(R,"class","svelte-1tkryed"),E(R,"selected","contactMe"===e[0]),g(P,"class","svelte-1tkryed"),g(r,"class","svelte-1tkryed"),g(n,"class","svelte-1tkryed")},m(t,e){i(t,n,e),l(n,r),l(r,s),l(s,o),l(o,c),l(r,a),l(r,f),l(f,m),l(m,_),l(r,S),l(r,w),l(w,x),l(x,j),l(r,A),l(r,P),l(P,R),l(R,L)},p(t,[e]){1&e&&E(o,"selected",void 0===t[0]),1&e&&E(m,"selected","projects"===t[0]),1&e&&E(x,"selected","resume"===t[0]),1&e&&E(R,"selected","contactMe"===t[0])},i:t,o:t,d(t){t&&u(n)}}}function st(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ot extends Q{constructor(t){super(),Y(this,t,st,rt,c,{segment:0})}}function ct(t){let e,n,r;const s=new ot({props:{segment:t[0]}}),o=t[2].default,c=function(t,e,n,r){if(t){const s=a(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){K(s.$$.fragment),e=h(),n=p("main"),c&&c.c()},l(t){F(s.$$.fragment,t),e=b(t),n=y(t,"MAIN",{});var r=$(n);c&&c.l(r),r.forEach(u)},m(t,o){G(s,t,o),i(t,e,o),i(t,n,o),c&&c.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),c&&c.p&&2&e&&c.p(a(o,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(o,t[1],e,null))},i(t){r||(B(s.$$.fragment,t),B(c,t),r=!0)},o(t){J(s.$$.fragment,t),J(c,t),r=!1},d(t){W(s,t),t&&u(e),t&&u(n),c&&c.d(t)}}}function at(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class lt extends Q{constructor(t){super(),Y(this,t,at,ct,c,{segment:0})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var s=$(e);n=v(s,r),s.forEach(u)},m(t,r){i(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&u(e)}}}function ut(e){let n,r,s,o,c,a,f,E,w,x=e[1].message+"";document.title=n=e[0];let j=e[2]&&e[1].stack&&it(e);return{c(){r=h(),s=p("h1"),o=d(e[0]),c=h(),a=p("p"),f=d(x),E=h(),j&&j.c(),w=m(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=b(t),s=y(t,"H1",{class:!0});var n=$(s);o=v(n,e[0]),n.forEach(u),c=b(t),a=y(t,"P",{class:!0});var l=$(a);f=v(l,x),l.forEach(u),E=b(t),j&&j.l(t),w=m(),this.h()},h(){g(s,"class","svelte-1hjjbzs"),g(a,"class","svelte-1hjjbzs")},m(t,e){i(t,r,e),i(t,s,e),l(s,o),i(t,c,e),i(t,a,e),l(a,f),i(t,E,e),j&&j.m(t,e),i(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(o,t[0]),2&e&&x!==(x=t[1].message+"")&&_(f,x),t[2]&&t[1].stack?j?j.p(t,e):(j=it(t),j.c(),j.m(w.parentNode,w)):j&&(j.d(1),j=null)},i:t,o:t,d(t){t&&u(r),t&&u(s),t&&u(c),t&&u(a),t&&u(E),j&&j.d(t),t&&u(w)}}}function ft(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class pt extends Q{constructor(t){super(),Y(this,t,ft,ut,c,{status:0,error:1})}}function dt(t){let n,r;const s=[t[4].props];var o=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var a=new o(c());return{c(){a&&K(a.$$.fragment),n=m()},l(t){a&&F(a.$$.fragment,t),n=m()},m(t,e){a&&G(a,t,e),i(t,n,e),r=!0},p(t,e){const r=16&e?V(s,[z(t[4].props)]):{};if(o!==(o=t[4].component)){if(a){H();const t=a;J(t.$$.fragment,1,0,()=>{W(t,1)}),T()}o?(K((a=new o(c())).$$.fragment),B(a.$$.fragment,1),G(a,n.parentNode,n)):a=null}else o&&a.$set(r)},i(t){r||(a&&B(a.$$.fragment,t),r=!0)},o(t){a&&J(a.$$.fragment,t),r=!1},d(t){t&&u(n),a&&W(a,t)}}}function ht(t){let e;const n=new pt({props:{error:t[0],status:t[1]}});return{c(){K(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,r){G(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function mt(t){let e,n,r,s;const o=[ht,dt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=o[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),i(t,r,n),s=!0},p(t,s){let l=e;e=a(t),e===l?c[e].p(t,s):(H(),J(c[l],1,1,()=>{c[l]=null}),T(),n=c[e],n||(n=c[e]=o[e](t),n.c()),B(n,1),n.m(r.parentNode,r))},i(t){s||(B(n),s=!0)},o(t){J(n),s=!1},d(t){c[e].d(t),t&&u(r)}}}function gt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new lt({props:s});return{c(){K(o.$$.fragment)},l(t){F(o.$$.fragment,t)},m(t,e){G(o,t,e),n=!0},p(t,[e]){const n=12&e?V(r,[4&e&&{segment:t[2][0]},8&e&&z(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(B(o.$$.fragment,t),n=!0)},o(t){J(o.$$.fragment,t),n=!1},d(t){W(o,t)}}}function $t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:c}=e,{level0:a}=e,{level1:l=null}=e;return j(et,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,l=t.level1)},[s,o,c,a,l,r]}class yt extends Q{constructor(t){super(),Y(this,t,$t,gt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const vt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],bt=[{js:()=>import("./index.ea671d01.js"),css:["index.ea671d01.css","client.edaaf196.css"]},{js:()=>import("./contactMe.b0756f7c.js"),css:["contactMe.b0756f7c.css","client.edaaf196.css"]},{js:()=>import("./projects.cdd4a359.js"),css:["projects.cdd4a359.css","client.edaaf196.css"]},{js:()=>import("./resume.9364345a.js"),css:["resume.9364345a.css","client.edaaf196.css"]},{js:()=>import("./index.e26d472f.js"),css:["index.e26d472f.css","client.edaaf196.css"]},{js:()=>import("./[slug].9cecfedb.js"),css:["[slug].9cecfedb.css","client.edaaf196.css"]}],_t=(Et=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contactMe\/?$/,parts:[{i:1}]},{pattern:/^\/projects\/?$/,parts:[{i:2}]},{pattern:/^\/resume\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:Et(t[1])})}]}]);var Et;const St="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,xt,jt,At=!1,Pt=[],Rt="{}";const Lt={page:tt({}),preloading:tt(null),session:tt(St&&St.session)};let Ct,kt;Lt.session.subscribe(async t=>{if(Ct=t,!At)return;kt=!0;const e=Ht(new URL(location.href)),n=xt={},{redirect:r,props:s,branch:o}=await Vt(e);n===xt&&await Jt(r,o,s,e.page)});let Nt,Ot=null;let qt,Ut=1;const It="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Mt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St.baseUrl))return null;let e=t.pathname.slice(St.baseUrl.length);if(""===e&&(e="/"),!vt.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],s=r.pattern.exec(e);if(s){const n=Dt(t.search),o=r.parts[r.parts.length-1],c=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:s,page:a}}}}function Tt(){return{x:pageXOffset,y:pageYOffset}}async function Bt(t,e,n,r){if(e)qt=e;else{const t=Tt();Mt[qt]=t,e=qt=++Ut,Mt[qt]=n?t:{x:0,y:0}}qt=e,wt&&Lt.preloading.set(!0);const s=Ot&&Ot.href===t.href?Ot.promise:Vt(t);Ot=null;const o=xt={},{redirect:c,props:a,branch:l}=await s;if(o===xt&&(await Jt(c,l,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Mt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Mt[qt]=t,t&&scrollTo(t.x,t.y)}}async function Jt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ht(new URL(t,document.baseURI));return n?(It[e.replaceState?"replaceState":"pushState"]({id:qt},"",t),Bt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Lt.page.set(r),Lt.preloading.set(!1),wt)wt.$set(n);else{n.stores={page:{subscribe:Lt.page.subscribe},preloading:{subscribe:Lt.preloading.subscribe},session:Lt.session},n.level0={props:await jt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Kt(t.nextSibling);Kt(t),Kt(e)}wt=new yt({target:Nt,props:n,hydrate:!0})}Pt=e,Rt=JSON.stringify(r.query),At=!0,kt=!1}async function Vt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let a;jt||(jt=St.preloaded[0]||nt.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Ct));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Rt)return!0;const s=Pt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,i,s)&&(u=!0),o.segments[l]=r[a+1],!e)return{segment:f};const p=l++;if(!kt&&!u&&Pt[a]&&Pt[a].part===e.i)return Pt[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(bt[e.i]);let m;return m=At||!St.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ct):{}:St.preloaded[a+1],o[`level${p}`]={component:d,props:m,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}function zt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Kt(t){t.parentNode.removeChild(t)}function Ft(t){const e=Ht(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Vt(e)),Ot.promise}let Gt;function Wt(t){clearTimeout(Gt),Gt=setTimeout(()=>{Xt(t)},20)}function Xt(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&Ft(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ht(s);if(o){Bt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),It.pushState({id:qt},"",s.href)}}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Zt(t){if(Mt[qt]=Tt(),t.state){const e=Ht(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else Ut=Ut+1,function(t){qt=t}(Ut),It.replaceState({id:qt},"",location.href)}var te;te={target:document.querySelector("#sapper")},"scrollRestoration"in It&&(It.scrollRestoration="manual"),function(t){Nt=t}(te.target),addEventListener("click",Yt),addEventListener("popstate",Zt),addEventListener("touchstart",Xt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;It.replaceState({id:Ut},"",e);const n=new URL(location.href);if(St.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:c,error:a}=St;jt||(jt=o&&o[0]),Jt(null,[],{error:a,status:c,session:s,level0:{props:jt},level1:{props:{status:c,error:a},component:pt},segments:o},{host:e,path:n,query:Dt(r),params:{}})}();const r=Ht(n);return r?Bt(r,Ut,!0,t):void 0});export{Q as S,h as a,y as b,b as c,u as d,p as e,$ as f,v as g,g as h,Y as i,i as j,l as k,_ as l,f as m,t as n,S as q,c as s,d as t};
