_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},YC4n:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/svgicon",function(){return n("m1hF")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?o.a.createElement(f,l(l({ref:t},b),{},{components:n})):o.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"===typeof e?e:r,c[1]=l;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},m1hF:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("97Jx"),o=n.n(r),a=n("m3Bd"),c=n.n(a),l=(n("ERkP"),n("ZVZ0")),i=["components"],b={};function p(e){var t=e.components,n=c()(e,i);return Object(l.b)("wrapper",o()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"SVGIcon"),Object(l.b)("p",null,"If you need a custom SVG icon, you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"<SVGIcon>")," component to extend the native ",Object(l.b)("inlineCode",{parentName:"p"},"<svg>")," element:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"It comes with built-in accessibility."),Object(l.b)("li",{parentName:"ul"},"SVG elements should be scaled for a 24x24px viewport.")),Object(l.b)("h2",null,"Import"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { SVGIcon } from '@trendmicro/react-styled-ui';\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("p",null,"You can use the current text color by adding the ",Object(l.b)("inlineCode",{parentName:"p"},'fill="currentColor"')," attribute to the ",Object(l.b)("inlineCode",{parentName:"p"},"<path>")," or ",Object(l.b)("inlineCode",{parentName:"p"},"<g>")," element. This means that the fill color of the SVG will be inherited from the color value of its parent."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<SVGIcon color="gray:50" size={24} viewBox="0 0 16 16">\n  <g fill="currentColor">\n    <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c0-4.418-3.582-8-8-8v0zM11 12l-3-3-3 3-1.060-1.060 3.060-2.94-3-3 1.060-1.070 2.94 2.95 2.94-2.94 1.060 1.060-2.89 3 3 3z" />\n  </g>\n</SVGIcon>\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const CustomIcon = ({ size, ...rest }) => {\n    const viewBox = \'0 0 16 16\';\n    return (\n      <SVGIcon size={size} viewBox={viewBox} {...rest}>\n        <g fill="currentColor">\n          <path d="M15 8c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-3.866 3.134-7 7-7v0c3.866 0 7 3.134 7 7v0z" />\n        </g>\n      </SVGIcon>\n    );\n  };\n\n  return (\n    <Stack direction="row" spacing="3x" align="center">\n      <CustomIcon size="1x" color="blue:10" />\n      <CustomIcon size="2x" color="blue:20" />\n      <CustomIcon size="3x" color="blue:30" />\n      <CustomIcon size="4x" color="blue:40" />\n      <CustomIcon size="5x" color="blue:50" />\n      <CustomIcon size="6x" color="blue:60" />\n      <CustomIcon size="7x" color="blue:70" />\n      <CustomIcon size="8x" color="blue:80" />\n      <CustomIcon size="9x" color="blue:90" />\n      <CustomIcon size="10x" color="blue:100" />\n    </Stack>\n  );\n}\n')),Object(l.b)("h2",null,"Props"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"SVGIcon")," composes the ",Object(l.b)("a",{parentName:"p",href:"./pseudobox"},Object(l.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component. You can override the default styles with style props."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"size"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"The size of the icon.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"'currentColor'"),Object(l.b)("td",{parentName:"tr",align:"left"},"The color of the icon.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"focusable"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"false"),Object(l.b)("td",{parentName:"tr",align:"left"},"Denotes that the icon is not an interactive element, and only used for presentation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"role"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"'presentation'"),Object(l.b)("td",{parentName:"tr",align:"left"},"One of: ",Object(l.b)("inlineCode",{parentName:"td"},"'presentation'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'img'"))))))}p.isMDXComponent=!0},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0}},[["YC4n",0,1]]]);