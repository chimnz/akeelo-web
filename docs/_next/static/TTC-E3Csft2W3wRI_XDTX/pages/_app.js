(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));var r=n("o0o1"),o=n.n(r),u=n("HaE+");function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=n("8Bbg"),p=n.n(l),d=n("8Kt/"),v=n.n(d),h=n("q1tI"),y=n.n(h),m=(n("RDVA"),n("tHSo")),b=n.n(m),w=y.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var _=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(f,t);var e,n,r,c=g(f);function f(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),c.apply(this,arguments)}return e=f,n=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return w(y.a.Fragment,null,w(v.a,null,w("title",null,"Akeelo - The Simple Science Search Engine"),w("link",{rel:"shortcut icon",href:b.a})),w(e,n))}}],r=[{key:"getInitialProps",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var n,r,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,u={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:u=t.sent;case 6:return t.abrupt("return",{pageProps:u});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}],n&&a(e.prototype,n),r&&a(e,r),f}(p.a)},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),u=n("lwAK"),a=n("FYa8"),i=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var i=0,c=l.length;i<c;i++){var f=l[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?u=!1:(p.add(s),r[f]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function v(t){var e=t.children;return(r.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}v.rewind=d.rewind;var h=v;e.default=h},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),u=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),f=n("yXPU");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var p=l(n("q1tI")),d=n("g/15");function v(t){return h.apply(this,arguments)}function h(){return(h=f(r.mark((function t(e){var n,o,u;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return u=t.sent,t.abrupt("return",{pageProps:u});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var y=function(t){a(n,t);var e=s(n);function n(){return o(this,n),e.apply(this,arguments)}return u(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,u=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,o||u?{}:{url:m(e)})))}}]),n}(p.default.Component);function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=y,y.origGetInitialProps=v,y.getInitialProps=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(f){return void n(f)}i.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var a=t.apply(e,n);function i(t){r(a,o,u,i,c,"next",t)}function c(t){r(a,o,u,i,c,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RDVA:function(t,e,n){},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),u=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||u(t)||a()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),u=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){a(f,i);var c=s(f);function f(t){var u;return r(this,f),u=c.call(this,t),p&&(e.add(o(u)),n(o(u))),u}return u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},tHSo:function(t,e){t.exports="/_next/static/images/favicon-f2ad88293b5f96f831f9fffaad266f94.ico"}},[[0,0,2,1]]]);