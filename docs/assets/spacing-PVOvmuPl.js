import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as r}from"./index-z5U8iC57.js";import{M as i}from"./index-C4wj79t3.js";import{D as p}from"./DocBlockContainer-CnE8sdWq.js";import{S as l}from"./Spacing-B6u9S1lW.js";import{K as s,t}from"./Text-DFITVtsb.js";import"./index-BBkUAzwr.js";import"./iframe-B55jFVtd.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-BUy04y1F.js";import"./index-D_r38UMq.js";import"./index-CTagvRJC.js";import"./index-DrFu-skq.js";function o(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tokens/Spacing"}),`
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
