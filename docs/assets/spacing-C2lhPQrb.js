import{j as e}from"./jsx-runtime-kP7yjuVC.js";import{useMDXComponents as r}from"./index-ZoVVxn6u.js";import{M as i}from"./index-Crnc153x.js";import{D as p}from"./DocBlockContainer-CjOpAuDc.js";import{S as l}from"./Spacing-Dd5F6TuS.js";import{K as s,t}from"./Text-DL3_Xpov.js";import"./index-BmYOpbA5.js";import"./iframe-CDX74zz4.js";import"../sb-preview/runtime.js";import"./index-C92LrVYg.js";import"./index-xq08HDZe.js";import"./index-CSU8i8pp.js";import"./index-Bo9XHt4h.js";import"./index-DrFu-skq.js";function o(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tokens/Spacing"}),`
`,e.jsx(n.h1,{id:"spacing",children:"Spacing"}),`
`,e.jsx(n.p,{children:"The spacing scale is a base-8 scale. We chose a base-8 scale because eight is a highly composable number (it can be divided and multiplied many times and result in whole numbers), yet allows spacing dense enough for different interface solutions. The scale's exception is that it begins at 4px to allow smaller padding and margin for denser parts of the site, from there on it steps up consistently in equal values of 8px."}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(p,{children:[e.jsx(s,{style:{marginBottom:t.space.small},children:"Small space below"}),e.jsx(s,{style:{marginBottom:t.space.xlarge},children:"X large space below"}),e.jsx(s,{children:"X large space above"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { AppCard, Centered, Heading, Spinner, tokens } from 'mirotone-react';

function App() {
  return (
    <>
      <AppCard style={{ marginBottom: tokens.space.small }}>Small space below</AppCard>
      <AppCard style={{ marginBottom: tokens.space.xlarge }}>X large space below</AppCard>
      <AppCard>X large space above</AppCard>
    </>
  );
}
`})})]})}function S(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{S as default};
