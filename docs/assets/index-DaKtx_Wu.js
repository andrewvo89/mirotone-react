import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as o}from"./index-z5U8iC57.js";import{M as r}from"./index-DnEVBUnm.js";import{T as l}from"./Text-CVP924a7.js";import{D as c}from"./DocBlockContainer-CnE8sdWq.js";import"./index-BBkUAzwr.js";import"./iframe-BzFsIeIu.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-BUy04y1F.js";import"./index-D_r38UMq.js";import"./index-CTagvRJC.js";import"./index-DrFu-skq.js";function s(){return n.jsx(c,{children:n.jsx(l,{className:"text-3xl font-bold underline text-blue-500",children:"Tailwind text"})})}s.__docgenInfo={description:"",methods:[],displayName:"App"};function i(t){const e={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Styling/Tailwind CSS"}),`
`,n.jsx(e.h1,{id:"tailwind-css",children:"Tailwind CSS"}),`
`,n.jsxs(e.p,{children:["All components are compatible with Tailwind CSS. The ",n.jsx(e.code,{children:"className"})," props is exposed to allow Tailwind CSS classes to be applied to the component."]}),`
`,n.jsx(e.h4,{id:"indexcss",children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"index.css"})})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@tailwind base;
@tailwind components;
@tailwind utilities;
`})}),`
`,n.jsx(e.h4,{id:"apptsx",children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"App.tsx"})})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import './index.css';

import { Text } from 'mirotone-react';

const App = () => <Text className='text-3xl font-bold underline text-blue-500'>Tailwind text</Text>;

export default App;
`})}),`
`,n.jsx(s,{})]})}function C(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{C as default};
