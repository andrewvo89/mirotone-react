import{j as n}from"./index-CfptBk_o.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as r}from"./index-Bz8aPHvw.js";import{T as l}from"./Text-w2RWykAU.js";import{D as c}from"./DocBlockContainer-CnCY0qXO.js";import"./index-D4H_InIO.js";import"./index-vYCkCKEW.js";import"./iframe-BKUC5TR5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(){return n.jsx(c,{children:n.jsx(l,{className:"text-3xl font-bold underline text-blue-500",children:"Tailwind text"})})}o.__docgenInfo={description:"",methods:[],displayName:"App"};function i(t){const e={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Styling/Tailwind CSS"}),`
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
`,n.jsx(o,{})]})}function T(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{T as default};
