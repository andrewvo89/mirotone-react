import{j as e}from"./index-CfptBk_o.js";import{useMDXComponents as o}from"./index-BqIVwv1J.js";import{M as c}from"./index-Bz8aPHvw.js";import{T as i}from"./Text-w2RWykAU.js";import{D as l}from"./DocBlockContainer-CnCY0qXO.js";import"./index-D4H_InIO.js";import"./index-vYCkCKEW.js";import"./iframe-BKUC5TR5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const d="_text_1o8zh_1",x={text:d};function r(){return e.jsx(l,{children:e.jsx(i,{className:x.text,children:"CSS text"})})}r.__docgenInfo={description:"",methods:[],displayName:"App"};function s(t){const n={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Styling/CSS"}),`
`,e.jsx(n.h1,{id:"css-styling",children:"CSS styling"}),`
`,e.jsxs(n.p,{children:["All components can be styled using CSS or CSS modules. The ",e.jsx(n.code,{children:"className"})," prop is exposed to allow classes to be applied to the component."]}),`
`,e.jsx(n.h4,{id:"indexmodulecss",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"index.module.css"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.text {
  color: var(--blue600);
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
`})}),`
`,e.jsx(n.h4,{id:"apptsx",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"App.tsx"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import styles from './index.module.css';

import { Text } from 'mirotone-react';

const App = () => <Text className={styles.text}>CSS text</Text>;

export default App;
`})}),`
`,e.jsx(r,{})]})}function y(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{y as default};
