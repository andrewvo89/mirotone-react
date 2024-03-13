import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as l}from"./index-D4zn1F6D.js";import{D as o}from"./DocBlockContainer-CLNNcwUp.js";import{t as r,A as a}from"./Text-Dde-qTQH.js";import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-VdPCdxEN.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./extends-CCbyfPlC.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";const p={xxxsmall:"2px",xxsmall:"4px",xsmall:"8px",small:"16px",medium:"24px",large:"32px",xlarge:"40px",xxlarge:"48px",xxxlarge:"62px"};function c(){return e.jsx(o,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Object.entries(p).map(([s,n])=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(12,1fr)",alignItems:"center"},children:[e.jsx("span",{style:{gridColumn:"1/7"},children:s}),e.jsx("span",{style:{gridColumn:"7/8"},children:n}),e.jsx("div",{style:{gridColumn:"8/13",border:`1px solid ${r.color.indigo[700]}`,borderTop:"none",borderBottom:"none",backgroundColor:r.color.indigo[400],display:"block",height:"24px",width:n}})]},s))})})}function t(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tokens/Spacing"}),`
`,e.jsx(n.h1,{id:"spacing",children:"Spacing"}),`
`,e.jsx(n.p,{children:"The spacing scale is a base-8 scale. We chose a base-8 scale because eight is a highly composable number (it can be divided and multiplied many times and result in whole numbers), yet allows spacing dense enough for different interface solutions. The scale's exception is that it begins at 4px to allow smaller padding and margin for denser parts of the site, from there on it steps up consistently in equal values of 8px."}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o,{children:[e.jsx(a,{style:{marginBottom:r.space.small},children:"Small space below"}),e.jsx(a,{style:{marginBottom:r.space.xlarge},children:"X large space below"}),e.jsx(a,{children:"X large space above"})]}),`
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
`})})]})}function v(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}export{v as default};
