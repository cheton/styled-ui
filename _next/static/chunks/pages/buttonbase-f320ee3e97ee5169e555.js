_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"===typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},dPkj:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("97Jx"),o=n.n(r),a=n("m3Bd"),l=n.n(a),c=(n("ERkP"),n("ZVZ0")),i=["components"],s={};function b(e){var t=e.components,n=l()(e,i);return Object(c.b)("wrapper",o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"ButtonBase"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ButtonBase")," does not have appearance settings including default border, color, outline, and padding. It aims to be a simple building block for creating a button."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { ButtonBase } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"<ButtonBase>Click Me</ButtonBase>\n")),Object(c.b)("h3",null,"Attributes"),Object(c.b)("p",null,"Standard button attributes are supported, e.g., ",Object(c.b)("inlineCode",{parentName:"p"},"type"),", ",Object(c.b)("inlineCode",{parentName:"p"},"disabled"),", etc."),Object(c.b)("h4",null,Object(c.b)("inlineCode",{parentName:"h4"},"disabled")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"<ButtonBase\n  disabled\n  _disabled={{\n    opacity: 0.28, // dark: 0.28, light: 0.3\n    cursor: 'not-allowed',\n  }}\n>\n  Button is disabled\n</ButtonBase>\n")),Object(c.b)("h3",null,"Icon button"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const IconButton = (props) => {\n  const [colorMode] = useColorMode();\n  const { colors } = useTheme();\n  const color = {\n    dark: 'white:secondary',\n    light: 'black:secondary',\n  }[colorMode];\n  const hoverColor = {\n    dark: 'white:primary',\n    light: 'black:primary',\n  }[colorMode];\n  const activeColor = color;\n  const focusColor = color;\n  const focusHoverColor = hoverColor;\n  const focusActiveColor = activeColor;\n  const focusBorderColor = colors['blue:60'];\n\n  return (\n    <ButtonBase\n      border={1}\n      borderColor=\"transparent\"\n      color={color}\n      transition=\"all .2s\"\n      lineHeight={1}\n      width=\"8x\"\n      height=\"8x\"\n      _hover={{\n        color: hoverColor,\n      }}\n      _active={{\n        color: activeColor,\n      }}\n      _focus={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusColor,\n      }}\n      _focusHover={{\n        color: focusHoverColor,\n      }}\n      _focusActive={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusActiveColor,\n      }}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  return (\n    <IconButton>\n      <Icon icon=\"close\" />\n    </IconButton>\n  );\n}\n\nrender(<Example />);\n")),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ButtonBase")," composes ",Object(c.b)("a",{parentName:"p",href:"./pseudobox"},Object(c.b)("inlineCode",{parentName:"a"},"PseudoBox")),". You can override the default styles with style props."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"disabled"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the button will be disabled. This sets ",Object(c.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(c.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")))))}b.isMDXComponent=!0},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},zPCL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buttonbase",function(){return n("dPkj")}])}},[["zPCL",0,1]]]);