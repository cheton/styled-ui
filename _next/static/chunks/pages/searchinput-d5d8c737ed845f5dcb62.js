_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[55],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},HVG5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n("97Jx"),r=n.n(a),l=n("m3Bd"),c=n.n(l),o=(n("ERkP"),n("ZVZ0")),i=["components"],p={};function b(e){var t=e.components,n=c()(e,i);return Object(o.b)("wrapper",r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"SearchInput"),Object(o.b)("h2",null,"Import"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { SearchInput } from '@trendmicro/react-styled-ui';\n")),Object(o.b)("h2",null,"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <SearchInput placeholder="Search" />\n  <SearchInput placeholder="Search" defaultValue="John Doe" />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="John Doe"\n    readOnly\n    isLoading\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend."\n    textOverflow="ellipsis"\n  />\n</Stack>\n')),Object(o.b)("h3",null,"Keyword search"),Object(o.b)("p",null,"This example shows how to create a keyword search component with the following features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Automatically adjust the width of an input element"),Object(o.b)("li",{parentName:"ul"},"Handle focus and blur events"),Object(o.b)("li",{parentName:"ul"},"Trigger search when pressed ",Object(o.b)("inlineCode",{parentName:"li"},"Enter")," key"),Object(o.b)("li",{parentName:"ul"},"Display a loading indicator that recognizes the loading state")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const ref = React.useRef();\n  const [placeholder, setPlaceholder] = React.useState('Search');\n  const [inputWidth, setInputWidth] = React.useState(180);\n  const [keyword, setKeyword] = React.useState('');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const searchKeyword = (keyword) => {\n    setIsLoading(true);\n    setTimeout(() => {\n      setIsLoading(false);\n    }, 1000);\n  };\n  const onChange = (e) => {\n    const keyword = e.target.value;\n    setKeyword(keyword);\n  };\n  const onClearInput = (e) => {\n    const keyword = '';\n    setKeyword(keyword);\n  };\n  const onKeyPress = (e) => {\n    if (e.key === 'Enter') {\n      const keyword = e.target.value;\n      if (!!keyword) {\n        searchKeyword(keyword);\n      }\n    }\n  };\n  const handleClickSearch = (e) => {\n    if (!!keyword) {\n      searchKeyword(keyword);\n    }\n  };\n\n  return (\n    <>\n      <SearchInput\n        ref={ref}\n        placeholder={placeholder}\n        value={keyword}\n        isLoading={isLoading}\n        readOnly={isLoading}\n        onChange={onChange}\n        onClearInput={onClearInput}\n        onFocus={() => {\n          setPlaceholder('Company name, endpoint name');\n          setInputWidth(360);\n          ref.current.select();\n        }}\n        onBlur={() => {\n          setPlaceholder('Search');\n\n          // Shrink width when the value is empty\n          setInputWidth(!!keyword ? 360 : 180);\n        }}\n        onKeyPress={onKeyPress}\n        width={inputWidth}\n        textOverflow=\"ellipsis\"\n      />\n      <Box mt=\"4x\">\n        <Button disabled={!keyword} onClick={handleClickSearch}>\n          Search\n        </Button>\n      </Box>\n    </>\n  );\n}\n")),Object(o.b)("h3",null,"Sizes"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(o.b)("inlineCode",{parentName:"p"},"SearchInput"),". You can set the value to ",Object(o.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(o.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <SearchInput size="sm" placeholder="Small size (24px)" />\n  <SearchInput size="md" placeholder="Default size (32px)" />\n  <SearchInput size="lg" placeholder="Large size (40px)" />\n</Stack>\n')),Object(o.b)("h3",null,"Variants"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SearchInput")," component comes in 3 variants: ",Object(o.b)("inlineCode",{parentName:"p"},"outline"),", ",Object(o.b)("inlineCode",{parentName:"p"},"filled"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"unstyled"),". Pass the ",Object(o.b)("inlineCode",{parentName:"p"},"variant")," prop and set it to either of these values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <SearchInput variant="outline" placeholder="Search" />\n  <SearchInput variant="filled" placeholder="Search" />\n  <SearchInput variant="unstyled" placeholder="Search" />\n</Stack>\n')),Object(o.b)("h3",null,"Attributes"),Object(o.b)("p",null,"Standard input attributes are supported, e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"disabled"),", ",Object(o.b)("inlineCode",{parentName:"p"},"readOnly"),", ",Object(o.b)("inlineCode",{parentName:"p"},"required"),", etc."),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"disabled")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack directin="column" spacing="4x">\n  <SearchInput disabled placeholder="Placeholder text" />\n  <SearchInput disabled placeholder="Placeholder text" defaultValue="Disabled" />\n</Stack>\n')),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"readOnly")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack directin="column" spacing="4x">\n  <SearchInput readOnly placeholder="Placeholder text" />\n  <SearchInput readOnly placeholder="Placeholder text" defaultValue="Read-only" />\n</Stack>\n')),Object(o.b)("h4",null,Object(o.b)("inlineCode",{parentName:"h4"},"required")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<SearchInput required placeholder="Placeholder text" />\n')),Object(o.b)("h2",null,"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"SearchInput")," composes the ",Object(o.b)("a",{parentName:"p",href:"./input"},Object(o.b)("inlineCode",{parentName:"a"},"Input"))," component."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Default"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"isInvalid"),Object(o.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"left"}),Object(o.b)("td",{parentName:"tr",align:"left"},"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", the input will indicate an error. You can style this state by passing the ",Object(o.b)("inlineCode",{parentName:"td"},"_invalid")," prop.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"isLoading"),Object(o.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"left"}),Object(o.b)("td",{parentName:"tr",align:"left"},"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", then display the loading spinner.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"onChange"),Object(o.b)("td",{parentName:"tr",align:"left"},"function"),Object(o.b)("td",{parentName:"tr",align:"left"}),Object(o.b)("td",{parentName:"tr",align:"left"},"A callback called when the value is changed.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"onClearInput"),Object(o.b)("td",{parentName:"tr",align:"left"},"function"),Object(o.b)("td",{parentName:"tr",align:"left"}),Object(o.b)("td",{parentName:"tr",align:"left"},"A callback called when the clear button is clicked.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"size"),Object(o.b)("td",{parentName:"tr",align:"left"},"string"),Object(o.b)("td",{parentName:"tr",align:"left"},"'md'"),Object(o.b)("td",{parentName:"tr",align:"left"},"The visual size of the ",Object(o.b)("inlineCode",{parentName:"td"},"input")," element. One of: ",Object(o.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"variant"),Object(o.b)("td",{parentName:"tr",align:"left"},"string"),Object(o.b)("td",{parentName:"tr",align:"left"},"'outline'"),Object(o.b)("td",{parentName:"tr",align:"left"},"The variant of the input style to use. One of: ",Object(o.b)("inlineCode",{parentName:"td"},"'outline'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'filled'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'unstyled'"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"disabled"),Object(o.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"left"}),Object(o.b)("td",{parentName:"tr",align:"left"},"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the control. This sets ",Object(o.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(o.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"readOnly"),Object(o.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"left"}),Object(o.b)("td",{parentName:"tr",align:"left"},"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", prevents the value of the input from being edited.")))))}b.isMDXComponent=!0},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n("ERkP"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||l;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"===typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},"kH+f":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/searchinput",function(){return n("HVG5")}])},m3Bd:function(e,t,n){var a=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,r,l=a(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l},e.exports.default=e.exports,e.exports.__esModule=!0}},[["kH+f",0,1]]]);