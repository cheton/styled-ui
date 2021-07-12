_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},II68:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("97Jx"),a=n.n(r),o=n("m3Bd"),i=n.n(o),l=(n("ERkP"),n("ZVZ0")),c=["components"],p={};function b(e){var t=e.components,n=i()(e,c);return Object(l.b)("wrapper",a()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"LinkButton"),Object(l.b)("p",null,"This component provides an element resembling an anchor that purely acts as a click target with no navigation as result. It can also be used inline in text."),Object(l.b)("h2",null,"Import"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { LinkButton } from '@trendmicro/react-styled-ui';\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [timeLeft, setTimeLeft] = React.useState(180);\n  React.useEffect(() => {\n    const timer = setTimeout(() => {\n      if (timeLeft > 0) {\n        setTimeLeft(timeLeft - 1);\n      }\n    }, 1000);\n\n    return () => {\n      clearTimeout(timer);\n    };\n  }, [timeLeft]);\n  const handleClick = () => {\n    setTimeLeft(180);\n  };\n\n  return (\n    <Text>\n      If the email does not arrive in your inbox or spam folder, <LinkButton onClick={handleClick}>click here to resend ({timeLeft}s)</LinkButton>.\n    </Text>\n  );\n}\n")),Object(l.b)("h2",null,"Props"),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"LinkButton")," element is composed of the ",Object(l.b)("a",{parentName:"p",href:"./buttonbase"},Object(l.b)("inlineCode",{parentName:"a"},"ButtonBase"))," component."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"disabled"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the link button will be disabled. This sets ",Object(l.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by using the ",Object(l.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"onClick"),Object(l.b)("td",{parentName:"tr",align:"left"},"function"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"A callback called when the link button is clicked.")))))}b.isMDXComponent=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||s[f]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"===typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},s4R3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linkbutton",function(){return n("II68")}])}},[["s4R3",0,1]]]);