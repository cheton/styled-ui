_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{"1LyQ":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("97Jx"),a=n.n(r),o=n("m3Bd"),i=n.n(o),l=(n("ERkP"),n("ZVZ0")),c=["components"],p={};function s(e){var t=e.components,n=i()(e,c);return Object(l.b)("wrapper",a()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Text"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Text")," is used for rendering text and paragraphs."),Object(l.b)("h2",null,"Import"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Text } from '@trendmicro/react-styled-ui';\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("h3",null,"Sizes"),Object(l.b)("p",null,"Use the ",Object(l.b)("inlineCode",{parentName:"p"},"size")," prop to change the corresponding font size and line height. You can set the value to ",Object(l.b)("inlineCode",{parentName:"p"},"4xl"),", ",Object(l.b)("inlineCode",{parentName:"p"},"3xl"),", ",Object(l.b)("inlineCode",{parentName:"p"},"2xl"),", ",Object(l.b)("inlineCode",{parentName:"p"},"xl"),", ",Object(l.b)("inlineCode",{parentName:"p"},"lg"),", ",Object(l.b)("inlineCode",{parentName:"p"},"md"),", ",Object(l.b)("inlineCode",{parentName:"p"},"sm"),", or ",Object(l.b)("inlineCode",{parentName:"p"},"xs"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <Text size="4xl">\n    Four Extra Large (4XL)\n  </Text>\n  <Text size="3xl">\n    Three Extra Large (3XL)\n  </Text>\n  <Text size="2xl">\n    Two Extra Large (2XL)\n  </Text>\n  <Text size="xl">\n    Extra Large (XL)\n  </Text>\n  <Text size="lg">\n    Large (LG)\n  </Text>\n  <Text size="md">\n    Medium (MD)\n  </Text>\n  <Text size="sm">\n    Small (SM)\n  </Text>\n  <Text size="xs">\n    Extra Small (XS)\n  </Text>\n</Stack>\n')),Object(l.b)("h3",null,"Heading text"),Object(l.b)("p",null,"You can format the ",Object(l.b)("inlineCode",{parentName:"p"},"Text")," component by passing ",Object(l.b)("inlineCode",{parentName:"p"},"size")," prop and ",Object(l.b)("inlineCode",{parentName:"p"},"fontWeight")," to display a formatted Heading."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <Text size="sm" fontWeight="semibold">Heading 1</Text>\n  <Text size="md" fontWeight="semibold">Heading 2</Text>\n  <Text size="lg" fontWeight="semibold">Heading 3</Text>\n  <Text size="xl" fontWeight="semibold">Heading 4</Text>\n  <Text size="2xl" fontWeight="semibold">Heading 5</Text>\n  <Text size="3xl" fontWeight="semibold">Heading 6</Text>\n  <Text size="4xl" fontWeight="semibold">Heading 7</Text>\n</Stack>\n')),Object(l.b)("h3",null,"Formatting text"),Object(l.b)("p",null,"You can format the ",Object(l.b)("inlineCode",{parentName:"p"},"Text")," component by passing ",Object(l.b)("inlineCode",{parentName:"p"},"fontSize"),", ",Object(l.b)("inlineCode",{parentName:"p"},"lineHeight"),", or other style props."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [colorMode] = useColorMode();\n  const bg = colorMode === \'dark\' ? \'gray:80\' : \'gray:20\';\n\n  return (\n    <Stack direction="column" spacing="4x">\n      <Text bg={bg} lineHeight="1" px="2x">\n        This is exactly the same height as the font size\n      </Text>\n      <Text bg={bg} lineHeight="normal" px="2x">\n        A normal line height is about 20% larger than the font size\n      </Text>\n      <Text bg={bg} lineHeight="base" px="2x">\n        For accessibility concerns, use a minimum value of 1.5 for <code>line-height</code> for main paragraph content\n      </Text>\n    </Stack>\n  );\n}\n')),Object(l.b)("h3",null,"Text truncation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Text\n  overflow="hidden"\n  textOverflow="ellipsis"\n  whiteSpace="nowrap"\n  width="100%"\n>\n  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n</Text>\n')),Object(l.b)("h3",null,"The ",Object(l.b)("inlineCode",{parentName:"h3"},"as")," prop"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const TextBlock = (props) => {\n  const [colorMode] = useColorMode();\n  const borderColor = colorMode === \'dark\' ? \'gray:70\' : \'gray:20\';\n\n  return (\n    <Box px="3x" py="2x" border={1} borderColor={borderColor}>\n      <Text {...props} />\n    </Box>\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction="column" spacing="4x" shouldWrapChildren>\n      <TextBlock as="i">Italic</TextBlock>\n      <TextBlock as="u">Underline</TextBlock>\n      <TextBlock as="abbr">Abbreviation or acronym</TextBlock>\n      <TextBlock as="cite">Citation</TextBlock>\n      <TextBlock as="del">Deleted</TextBlock>\n      <TextBlock as="em">Emphasis</TextBlock>\n      <TextBlock as="ins">Inserted</TextBlock>\n      <TextBlock as="kbd">Ctrl + C</TextBlock>\n      <TextBlock as="mark">Highlighted</TextBlock>\n      <TextBlock as="s">Strikethrough</TextBlock>\n      <TextBlock as="samp">Sample</TextBlock>\n      <TextBlock as="sup">Superscript</TextBlock>\n      <TextBlock as="sub">Subscript</TextBlock>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(l.b)("h2",null,"Props"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Text")," composes the ",Object(l.b)("a",{parentName:"p",href:"./box"},Object(l.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"size"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"One of: ",Object(l.b)("inlineCode",{parentName:"td"},"'4xl'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'3xl'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'2xl'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'xl'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'lg'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'xs'"))))))}s.isMDXComponent=!0},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return x}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,x=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(x,l(l({ref:t},p),{},{components:n})):a.a.createElement(x,l({ref:t},p))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"===typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},heL0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/text",function(){return n("1LyQ")}])},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0}},[["heL0",0,1]]]);