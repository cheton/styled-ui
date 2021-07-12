_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},TbtL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("97Jx"),o=n.n(r),a=n("m3Bd"),l=n.n(a),c=(n("ERkP"),n("ZVZ0")),b=["components"],i={};function p(e){var t=e.components,n=l()(e,b);return Object(c.b)("wrapper",o()({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Stack"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Stack")," is a layout utility component that makes it easy to stack items together and apply a space between them."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import { Stack } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("p",null,"By default, each item is stacked vertically. Stack clones it's children and passes the spacing to them using the margin property."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"th"},"direction")," Prop"),Object(c.b)("th",{parentName:"tr",align:"left"},"Item Spacing"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"column"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"margin-bottom"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"column-reverse"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"margin-top"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"row"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"margin-right"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"row-reverse"),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"margin-left"))))),Object(c.b)("h3",null,"Vertically stacked items"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"column\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),Object(c.b)("h3",null,"Vertically stacked items in reverse order"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"column-reverse\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),Object(c.b)("h3",null,"Horizontally stacked items"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"row\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),Object(c.b)("h3",null,"Horizontally stacked items in reverse order"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n  return (\n    <Box p=\"2x\" boxShadow={boxShadow} border={1} borderColor={borderColor} {...props} />\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction=\"row-reverse\" spacing=\"1rem\">\n      <Item>Item 1</Item>\n      <Item>Item 2</Item>\n      <Item>Item 3</Item>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Stack")," composes the ",Object(c.b)("a",{parentName:"p",href:"./flex"},Object(c.b)("inlineCode",{parentName:"a"},"Flex"))," component. You can override the default styles with style props."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"direction"),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"},"'column'"),Object(c.b)("td",{parentName:"tr",align:"left"},"The direction to stack the items. One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'column'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'column-reverse'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'row'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'row-reverse'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"spacing"),Object(c.b)("td",{parentName:"tr",align:"left"},"number ","|"," string"),Object(c.b)("td",{parentName:"tr",align:"left"},"0"),Object(c.b)("td",{parentName:"tr",align:"left"},"The space between each stack item.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"shouldWrapChildren"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},"false"),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the children will be wrapped in a ",Object(c.b)("inlineCode",{parentName:"td"},"Box")," with ",Object(c.b)("inlineCode",{parentName:"td"},"display: inline-block"),", and the ",Object(c.b)("inlineCode",{parentName:"td"},"Box")," will take the ",Object(c.b)("inlineCode",{parentName:"td"},"spacing")," props.")))))}p.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,u=m["".concat(l,".").concat(s)]||m[s]||d[s]||a;return n?o.a.createElement(u,c(c({ref:t},i),{},{components:n})):o.a.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"===typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},uj04:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stack",function(){return n("TbtL")}])}},[["uj04",0,1]]]);