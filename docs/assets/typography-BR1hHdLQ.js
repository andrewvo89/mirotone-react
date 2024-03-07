import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as r,T as a}from"./index-Dqqpg_PN.js";import{H as l,z as p}from"./Text-CBxG_OWd.js";import{t as o}from"./index-BVjCO-_d.js";import{D as h}from"./DocBlockContainer-CLNNcwUp.js";import{useMDXComponents as s}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CuzN8BVR.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";const c="The quick brown fox jumps over the lazy dog";function i(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tokens/Typography"}),`
`,`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(a,{fontSizes:[12,14,16,20,24,28],fontWeight:o.typography.fontWeight.normal,sampleText:c,fontFamily:o.typography.font}),`
`,e.jsx(n.h2,{id:"font-size",children:"Font size"}),`
`,e.jsxs(n.p,{children:["There are 6 font sizes available: small (12), medium (14), large (16), xlarge (20), xxlarge (24), xxxlarge (28). They are accissible via ",e.jsx(n.code,{children:"tokens.typography.fontSize"})," the object."]}),`
`,e.jsx(n.h2,{id:"font-weight",children:"Font weight"}),`
`,e.jsxs(n.p,{children:["There are 4 font weights available: normal (400), medium (500), bold (600), black (800). They are accissible via ",e.jsx(n.code,{children:"tokens.typography.fontWeight"})," the object."]}),`
`,e.jsx(n.h2,{id:"font",children:"Font"}),`
`,e.jsx(n.p,{children:"There are 2 fonts available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`header ('Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
Apple Color Emoji, Segoe UI Emoji;),`}),`
`,e.jsx(n.li,{children:`body ('Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji,
Segoe UI Emoji;)`}),`
`]}),`
`,e.jsxs(n.p,{children:["They are accissible via ",e.jsx(n.code,{children:"tokens.typography.font"})," the object."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(h,{children:[e.jsx(l,{style:{fontSize:o.typography.fontSize.medium},children:"My custom heading"}),e.jsx(p,{style:{fontWeight:o.typography.fontWeight.black},children:"My custom text"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { AppCard, Centered, Heading, Spinner, tokens } from 'mirotone-react';

function App() {
  return (
    <>
      <Heading style={{ fontSize: tokens.typography.fontSize.medium }}>My custom heading</Heading>
      <Text style={{ fontWeight: tokens.typography.fontWeight.black }}>My custom text</Text>
    </>
  );
}
`})})]})}function v(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{c as SampleText,v as default};
