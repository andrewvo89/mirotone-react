import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as d}from"./index-z5U8iC57.js";import{M as u}from"./index-DCaiudd-.js";import{D as t}from"./DocBlockContainer-CnE8sdWq.js";import"./Spacing-CVCokLiy.js";import{F as a,t as n,B as i}from"./Text-CUk4Jwh_.js";import"./index-BBkUAzwr.js";import"./iframe-B6zfA_hn.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-BUy04y1F.js";import"./index-D_r38UMq.js";import"./index-CTagvRJC.js";import"./index-DrFu-skq.js";const c={small:"2px",medium:"4px",large:"8px",xlarge:"16px",xxlarge:"48px",circle:"50%"};function l(){return r.jsx(t,{children:r.jsx(a,{flexDirection:"column",gap:n.space.xsmall,children:Object.entries(c).map(([s,e])=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(12,1fr)",alignItems:"center"},children:[r.jsx("span",{style:{gridColumn:"1/7"},children:s}),r.jsx("span",{style:{gridColumn:"7/8"},children:e}),r.jsx("div",{style:{gridColumn:"8/10",borderRadius:e,backgroundColor:n.color.indigo[400],display:"block",height:"48px"}})]},s))})})}l.__docgenInfo={description:"",methods:[],displayName:"BorderRadius"};function o(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Tokens/Border radius"}),`
`,r.jsx(e.h1,{id:"border-radius",children:"Border radius"}),`
`,r.jsx(e.p,{children:"To round edges, we support the following sizes:"}),`
`,r.jsx(l,{}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(t,{children:r.jsxs(a,{gap:n.space.xsmall,children:[r.jsx(i,{style:{borderRadius:n.borderRadius.small},children:"Small radius"}),r.jsx(i,{style:{borderRadius:n.borderRadius.medium},children:"Medium radius"}),r.jsx(i,{style:{borderRadius:n.borderRadius.large},children:"Large radius"}),r.jsx(i,{style:{borderRadius:n.borderRadius.circle},children:"Circle radius"})]})}),`
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
`})})]})}function D(s={}){const{wrapper:e}={...d(),...s.components};return e?r.jsx(e,{...s,children:r.jsx(o,{...s})}):o(s)}export{D as default};
