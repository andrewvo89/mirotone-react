import{j as r}from"./jsx-runtime-CKrituN3.js";import{M as l}from"./index-DvJAp2L8.js";import{D as t}from"./DocBlockContainer-CLNNcwUp.js";import{F as d,t as n,B as i}from"./Text-BT1ZEBTq.js";import{useMDXComponents as a}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BO25i9cP.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./extends-CCbyfPlC.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";const u={small:"2px",medium:"4px",large:"8px",xlarge:"16px",xxlarge:"48px",circle:"50%"};function c(){return r.jsx(t,{children:r.jsx(d,{flexDirection:"column",gap:n.space.xsmall,children:Object.entries(u).map(([s,e])=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(12,1fr)",alignItems:"center"},children:[r.jsx("span",{style:{gridColumn:"1/7"},children:s}),r.jsx("span",{style:{gridColumn:"7/8"},children:e}),r.jsx("div",{style:{gridColumn:"8/10",borderRadius:e,backgroundColor:n.color.indigo[400],display:"block",height:"48px"}})]},s))})})}function o(s){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},a(),s.components);return r.jsxs(r.Fragment,{children:[r.jsx(l,{title:"Tokens/Border radius"}),`
`,r.jsx(e.h1,{id:"border-radius",children:"Border radius"}),`
`,r.jsx(e.p,{children:"To round edges, we support the following sizes:"}),`
`,r.jsx(c,{}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(t,{children:r.jsxs(d,{gap:n.space.xsmall,children:[r.jsx(i,{style:{borderRadius:n.borderRadius.small},children:"Small radius"}),r.jsx(i,{style:{borderRadius:n.borderRadius.medium},children:"Medium radius"}),r.jsx(i,{style:{borderRadius:n.borderRadius.large},children:"Large radius"}),r.jsx(i,{style:{borderRadius:n.borderRadius.circle},children:"Circle radius"})]})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { AppCard, Centered, Heading, Spinner, tokens } from 'mirotone-react';

function App() {
  return (
    <>
      <Button style={{ borderRadius: tokens.borderRadius.small }}>Small radius</Button>
      <Button style={{ borderRadius: tokens.borderRadius.medium }}>Medium radius</Button>
      <Button style={{ borderRadius: tokens.borderRadius.large }}>Large radius</Button>
      <Button style={{ borderRadius: tokens.borderRadius.circle }}>Circle radius</Button>
    </>
  );
}
`})})]})}function D(s={}){const{wrapper:e}=Object.assign({},a(),s.components);return e?r.jsx(e,Object.assign({},s,{children:r.jsx(o,s)})):o(s)}export{D as default};
