import{j as n}from"./jsx-runtime-kP7yjuVC.js";import{useMDXComponents as o}from"./index-ZoVVxn6u.js";import{M as r}from"./index-Crnc153x.js";import{T as l}from"./Text-DL3_Xpov.js";import{D as c}from"./DocBlockContainer-CjOpAuDc.js";import"./index-BmYOpbA5.js";import"./iframe-CDX74zz4.js";import"../sb-preview/runtime.js";import"./index-C92LrVYg.js";import"./index-xq08HDZe.js";import"./index-CSU8i8pp.js";import"./index-Bo9XHt4h.js";import"./index-DrFu-skq.js";function s(){return n.jsx(c,{children:n.jsx(l,{className:"text-3xl font-bold underline text-blue-500",children:"Tailwind text"})})}s.__docgenInfo={description:"",methods:[],displayName:"App"};function i(t){const e={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Styling/Tailwind CSS"}),`
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
