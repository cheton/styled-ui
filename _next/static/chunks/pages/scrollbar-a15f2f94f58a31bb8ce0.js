_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},FC13:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("97Jx"),a=n.n(r),o=n("m3Bd"),l=n.n(o),i=(n("ERkP"),n("ZVZ0")),b=["components"],c={};function s(e){var t=e.components,n=l()(e,b);return Object(i.b)("wrapper",a()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Scrollbar"),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import {\n  Scrollbar\n} from '@trendmicro/react-styled-ui';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("p",null,"The scrollbar default is hidden until you hover the mouse pointer over the content."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Scrollbar\n  height={160}\n  width="50%"\n  border={1}\n  borderColor="#424242"\n  resize="both"\n>\n  <Lorem count={12} style={{ paddingLeft: \'16px\', whiteSpace: \'nowrap\' }}  />\n</Scrollbar>\n')),Object(i.b)("h3",null,"Visibility"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"visibility")," prop to change the visibility style of ",Object(i.b)("inlineCode",{parentName:"p"},"Scrollbar"),". You can set the value to ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," (default), ",Object(i.b)("inlineCode",{parentName:"p"},"visible"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"hidden"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Flex>\n  <Box flex="auto" mr="4x">\n    <Text size="xl" marginBottom="2x">auto</Text>\n    <Scrollbar\n      height={120}\n      border={1}\n      borderColor="#424242"\n      visibility="auto"\n    >\n      <Lorem count={12} style={{ paddingLeft: \'16px\' }} />\n    </Scrollbar>\n  </Box>\n  <Box flex="auto" mr="4x">\n    <Text size="xl" marginBottom="2x">visible</Text>\n    <Scrollbar\n      height={120}\n      border={1}\n      borderColor="#424242"\n      visibility="visible"\n    >\n      <Lorem count={12} style={{ paddingLeft: \'16px\' }} />\n    </Scrollbar>\n  </Box>\n  <Box flex="auto" mr="4x">\n    <Text size="xl" marginBottom="2x">hidden</Text>\n    <Scrollbar\n      height={120}\n      border={1}\n      borderColor="#424242"\n      visibility="hidden"\n    >\n      <Lorem count={12} style={{ paddingLeft: \'16px\' }} />\n    </Scrollbar>\n  </Box>\n</Flex>\n')),Object(i.b)("h3",null,"Disabled"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"disabled")," attribute, the overflow is clipped, and the rest of the content is hidden."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Scrollbar height={160} disabled>\n  <Lorem count={12} />\n</Scrollbar>\n")),Object(i.b)("h3",null,"The minimal thumb size"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"minThumbSize")," attribute to set the minimal size (in pixels) for thumbs."),Object(i.b)("p",null,"The thumbs size will be the original size if the original size > the minimal size. In other words, the thumbs size will be the minimal size if the original size < the minimal size."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'function MinThumbSizeScroll() {\n  const [minThumbSize, setMinThumbSize] = React.useState(32);\n  const [dataRow, setDataRow] = React.useState(8);\n\n  return (\n    <>\n      <Box marginBottom="2x">\n        <Text marginBottom="1x">The minimal thumb size:</Text>\n        <RadioGroup onChange={e => setMinThumbSize(Number(e.target.value))} value={minThumbSize}>\n          <Stack spacing="1x" shouldWrapChildren>\n            <Radio value={32}>32px (default)</Radio>\n            <Radio value={16}>16px (customization)</Radio>\n          </Stack>\n        </RadioGroup>\n      </Box>\n      <Box marginBottom="2x">\n        <Text marginBottom="1x">Data row:</Text>\n        <RadioGroup onChange={e => setDataRow(Number(e.target.value))} value={dataRow}>\n          <Stack spacing="1x" shouldWrapChildren>\n            <Radio value={8}>8 rows</Radio>\n            <Radio value={24}>24 rows</Radio>\n          </Stack>\n        </RadioGroup>\n      </Box>\n      <Box>\n        <Text marginBottom="1x">Result:</Text>\n        <Scrollbar\n          height={120}\n          border={1}\n          borderColor="#424242"\n          visibility="visible"\n          minThumbSize={minThumbSize}\n        >\n          <Lorem count={dataRow} style={{ paddingLeft: \'16px\' }} />\n        </Scrollbar>\n      </Box>\n    </>\n  );\n}\n')),Object(i.b)("h3",null,"The fixed thumb size"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"thumbSize")," attribute to set a fixed size (in pixels) for thumbs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'function FixedThumbSizeScroll() {\n  const [thumbSize, setThumbSize] = React.useState(-1);\n  const [dataRow, setDataRow] = React.useState(8);\n\n  return (\n    <>\n      <Box marginBottom="2x">\n        <Text marginBottom="1x">The fixed thumb size:</Text>\n        <RadioGroup onChange={e => setThumbSize(Number(e.target.value))} value={thumbSize}>\n          <Stack spacing="1x" shouldWrapChildren>\n            <Radio value={-1}>undefined (default)</Radio>\n            <Radio value={100}>100px (customization)</Radio>\n          </Stack>\n        </RadioGroup>\n      </Box>\n      <Box marginBottom="2x">\n        <Text marginBottom="1x">Data row:</Text>\n        <RadioGroup onChange={e => setDataRow(Number(e.target.value))} value={dataRow}>\n          <Stack spacing="1x" shouldWrapChildren>\n            <Radio value={8}>8 rows</Radio>\n            <Radio value={24}>24 rows</Radio>\n          </Stack>\n        </RadioGroup>\n      </Box>\n      <Box>\n        <Text marginBottom="1x">Result:</Text>\n        <Scrollbar\n          height={120}\n          border={1}\n          borderColor="#424242"\n          visibility="visible"\n          thumbSize={thumbSize === -1 ? undefined : thumbSize}\n        >\n          <Lorem count={dataRow} style={{ paddingLeft: \'16px\' }} />\n        </Scrollbar>\n      </Box>\n    </>\n  );\n}\n')),Object(i.b)("h3",null,"The scrollbar in ",Object(i.b)("inlineCode",{parentName:"h3"},"Menu")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Menu width="160px">\n  <MenuButton width="100%">Select an option</MenuButton>\n  <MenuList width="100%" height={200}>\n    <Scrollbar>\n      <MenuItem>List item 1</MenuItem>\n      <MenuItem>List item 2</MenuItem>\n      <MenuItem>List item 3</MenuItem>\n      <MenuItem>List item 4</MenuItem>\n      <MenuItem>List item 5</MenuItem>\n      <MenuItem>List item 6</MenuItem>\n      <MenuItem>List item 7</MenuItem>\n      <MenuItem>List item 8</MenuItem>\n      <MenuItem>List item 9</MenuItem>\n      <MenuItem>List item 10</MenuItem>\n      <MenuItem>List item 11</MenuItem>\n      <MenuItem>List item 12</MenuItem>\n    </Scrollbar>\n  </MenuList>\n</Menu>\n')),Object(i.b)("h3",null,"The scrollbar in ",Object(i.b)("inlineCode",{parentName:"h3"},"Table")),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"renderScrollView")," and ",Object(i.b)("inlineCode",{parentName:"p"},"renderScrollTrack")," attributes to customize ",Object(i.b)("inlineCode",{parentName:"p"},"Scrollbar")," style."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"function CustomScrollbar({\n  showVerticalScrollbar,\n  showHorizontalScrollbar,\n  children,\n  ...props\n}) {\n  const renderScrollView = props => {\n    return (\n      <Box\n        {...props}\n        right={showVerticalScrollbar ? \"8px\" : 0}\n        bottom={showHorizontalScrollbar ? \"8px\" : 0}\n      />\n    );\n  };\n\n  const renderScrollTrack = props => {\n    const [colorMode] = useColorMode();\n    const bgColor = {\n      dark: 'gray:70',\n      light: 'gray:70',\n    }[colorMode];\n    return (\n      <Box\n        {...props}\n        bg={bgColor}\n      />\n    );\n  };\n\n  return (\n    <Scrollbar\n      visibility=\"visible\"\n      renderView={renderScrollView}\n      renderHorizontalTrack={renderScrollTrack}\n      renderVerticalTrack={renderScrollTrack}\n      {...props}\n    >\n      {children}\n    </Scrollbar>\n  );\n}\n\nfunction StickyTable() {\n  const columns = React.useMemo(() => [\n    {\n      Header: 'Event Type',\n      accessor: 'eventType',\n    },\n    {\n      Header: 'Affected Devices',\n      accessor: 'affectedDevices',\n    },\n    {\n      Header: 'Detections',\n      accessor: 'detections',\n    },\n  ], []);\n\n  const data = React.useMemo(() => [\n    { id: 1, eventType: 'Virus/Malware', affectedDevices: 20, detections: 634 },\n    { id: 2, eventType: 'Spyware/Grayware', affectedDevices: 20, detections: 634 },\n    { id: 3, eventType: 'URL Filtering', affectedDevices: 15, detections: 598 },\n    { id: 4, eventType: 'Web Reputation', affectedDevices: 15, detections: 598 },\n    { id: 5, eventType: 'Network Virus', affectedDevices: 15, detections: 497 },\n    { id: 6, eventType: 'Application Control', affectedDevices: 0, detections: 0 }\n  ], []);\n\n  const tableHeaderRef = React.createRef();\n\n  const [showHorizontalScrollbar, setShowHorizontalScrollbar] = React.useState(false);\n  const [showVerticalScrollbar, setShowVerticalScrollbar] = React.useState(false);\n\n  const onScroll = (e) => {\n    const scrollLeft = e.target.scrollLeft;\n    if (tableHeaderRef.current && tableHeaderRef.current.scrollLeft !== scrollLeft) {\n      tableHeaderRef.current.scrollLeft = scrollLeft;\n    }\n  };\n\n  const onUpdate = ({ hasHorizontalScrollbar, hasVerticalScrollbar, ...props }) => {\n    setShowHorizontalScrollbar(hasHorizontalScrollbar);\n    setShowVerticalScrollbar(hasVerticalScrollbar);\n  };\n\n  const {\n    getTableProps,\n    getTableBodyProps,\n    headerGroups,\n    rows,\n    prepareRow\n  } = useTable(\n    {\n      columns,\n      data,\n    },\n    useBlockLayout,\n  );\n  \n  return (\n    <Table\n      variant=\"outline\"\n      width={400}\n      height={200}\n      {...getTableProps()}\n    >\n      <TableHeader ref={tableHeaderRef}>\n        {headerGroups.map(headerGroup => {\n          const { style, ...props } = headerGroup.getHeaderGroupProps();\n          let headerWidth = style.width;\n          if (showVerticalScrollbar) {\n            headerWidth = `calc(${style.width} + 8px)`; // 8px is scrollbar width\n          }\n          return (\n            <TableHeaderRow style={{...style, width: headerWidth}} {...props}>\n              {headerGroup.headers.map((column, index) => (\n                <TableHeaderCell\n                  key={column.accessor}\n                  {...(showVerticalScrollbar && index === headerGroup.headers.length - 1) && {\n                    borderRight: 0,\n                  }}\n                  {...column.getHeaderProps()}\n                >\n                  {column.render('Header')}\n                </TableHeaderCell>\n              ))}\n              {showVerticalScrollbar && (\n                <TableHeaderCell width=\"8px\" padding={0} borderLeft={0} />\n              )}\n            </TableHeaderRow>\n          );\n        })}\n      </TableHeader>\n      <CustomScrollbar\n        showVerticalScrollbar\n        showHorizontalScrollbar\n        onScroll={onScroll}\n        onUpdate={onUpdate}\n      >\n        <TableBody {...getTableBodyProps()}>\n          {rows.map((row, index) => {\n            prepareRow(row);\n            return (\n              <TableRow key={index} {...row.getRowProps()}>\n                {row.cells.map(cell => {\n                  return (\n                    <TableCell key={cell.id} {...cell.getCellProps()}>\n                      {cell.render('Cell')}\n                    </TableCell>\n                  );\n                })}\n              </TableRow>\n            );\n          })}\n        </TableBody>\n      </CustomScrollbar>\n    </Table>\n  );\n}\n\nrender(<StickyTable />);\n")),Object(i.b)("h3",null,"Shadow scrollbar"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'function ShadowScrollbar(props) {\n  const shadowTopRef = React.useRef(null);\n  const shadowBottomRef = React.useRef(null);\n\n  const handleUpdate = ({ values }) => {\n    const { scrollTop, scrollHeight, clientHeight } = values;\n    const shadowTopOpacity = 1 / 20 * Math.min(scrollTop, 20);\n    const bottomScrollTop = scrollHeight - clientHeight;\n    const shadowBottomOpacity = 1 / 20 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));\n    shadowTopRef.current.style.opacity = shadowTopOpacity;\n    shadowBottomRef.current.style.opacity = shadowBottomOpacity;\n  };\n  return (\n    <Box position="relative">\n      <Scrollbar\n        onUpdate={handleUpdate}\n        {...props}\n      />\n      <Box\n        ref={shadowTopRef}\n        position="absolute"\n        top="0"\n        left="0"\n        right="0"\n        height="24px"\n        background="linear-gradient(to bottom, rgba(33, 33, 33, 1) 0%, rgba(255, 255, 255, 0) 100%)"\n      />\n      <Box\n        ref={shadowBottomRef}\n        position="absolute"\n        bottom="0"\n        left="0"\n        right="0"\n        height="24px"\n        background="linear-gradient(to top, rgba(33, 33, 33, 1) 0%, rgba(255, 255, 255, 0) 100%)"\n      />\n    </Box>\n  );\n}\n\nrender(\n  <ShadowScrollbar height={300}>\n    <Lorem count={12} />\n  </ShadowScrollbar>\n);\n')),Object(i.b)("h2",null,"Props"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Scrollbar")," composes the ",Object(i.b)("a",{parentName:"p",href:"./pseudoBox"},Object(i.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component. You can override the default styles with style props."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"disabled"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the overflow is clipped, and the rest of the content is hidden.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"maxHeight"),Object(i.b)("td",{parentName:"tr",align:"left"},"number ","|"," string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'auto'"),Object(i.b)("td",{parentName:"tr",align:"left"},"Set a minimum height (in pixels) for auto-height mode. If ",Object(i.b)("inlineCode",{parentName:"td"},"maxHeight")," is not ",Object(i.b)("inlineCode",{parentName:"td"},"'auto'"),", activate auto-height mode.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"minHeight"),Object(i.b)("td",{parentName:"tr",align:"left"},"number ","|"," string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'auto'"),Object(i.b)("td",{parentName:"tr",align:"left"},"Set a maximum height (in pixels) for auto-height mode.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"minThumbSize"),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"},"32"),Object(i.b)("td",{parentName:"tr",align:"left"},"Minimal thumb size in pixels.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"onScroll"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Event handler.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"onUpdate"),Object(i.b)("td",{parentName:"tr",align:"left"},"function({ values, hasHorizontalScrollbar, hasVerticalScrollbar })"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Called whenever the component is updated.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"renderView"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"The element your content will be rendered in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"renderHorizontalThumb"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Horizontal thumb element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"renderHorizontalTrack"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Horizontal track element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"renderVerticalThumb"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Vertical thumb element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"renderVerticalTrack"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Vertical track element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"thumbSize"),Object(i.b)("td",{parentName:"tr",align:"left"},"number"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Set a fixed size (in pixels) for thumbs.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"visibility"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'auto'"),Object(i.b)("td",{parentName:"tr",align:"left"},"Acceptable values: ",Object(i.b)("inlineCode",{parentName:"td"},"'auto'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'visible'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'hidden'"),". If ",Object(i.b)("inlineCode",{parentName:"td"},"'auto'"),", it will automatically show or hide the scrollbar on the container. If ",Object(i.b)("inlineCode",{parentName:"td"},"'visible'"),", the scrollbar is visible.  If ",Object(i.b)("inlineCode",{parentName:"td"},"'hidden'"),", the scrollbar is invisible.")))))}s.isMDXComponent=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},ONFf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scrollbar",function(){return n("FC13")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"===typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0}},[["ONFf",0,1]]]);