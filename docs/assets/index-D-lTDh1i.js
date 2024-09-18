import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as s}from"./index-z5U8iC57.js";import{M as i}from"./index-B1jtam0T.js";import{T as c}from"./Text-CUk4Jwh_.js";import{D as l}from"./DocBlockContainer-CnE8sdWq.js";import"./index-BBkUAzwr.js";import"./iframe-CtpNgi51.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-BUy04y1F.js";import"./index-D_r38UMq.js";import"./index-CTagvRJC.js";import"./index-DrFu-skq.js";const d="_text_1o8zh_1",p={text:d};function r(){return e.jsx(l,{children:e.jsx(c,{className:p.text,children:"CSS text"})})}r.__docgenInfo={description:"",methods:[],displayName:"App"};function o(n){const t={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Styling/CSS"}),`
`,e.jsx(t.h1,{id:"css-styling",children:"CSS styling"}),`
`,e.jsxs(t.p,{children:["All components can be styled using CSS or CSS modules. The ",e.jsx(t.code,{children:"className"})," prop is exposed to allow classes to be applied to the component."]}),`
`,e.jsx(t.h4,{id:"indexmodulecss",children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"index.module.css"})})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.text {
  color: var(--blue600);
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
`})}),`
`,e.jsx(t.h4,{id:"apptsx",children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"App.tsx"})})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import styles from './index.module.css';

import { Text } from 'mirotone-react';

const App = () => <Text className={styles.text}>CSS text</Text>;

export default App;
`})}),`
`,e.jsx(r,{})]})}function M(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{M as default};
