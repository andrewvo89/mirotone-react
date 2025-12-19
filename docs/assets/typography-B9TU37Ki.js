import{j as e}from"./index-CfptBk_o.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as r,T as a}from"./index-Bz8aPHvw.js";import{t as o,Q as l,T as h}from"./Text-w2RWykAU.js";import{D as p}from"./DocBlockContainer-CnCY0qXO.js";import"./index-D4H_InIO.js";import"./index-vYCkCKEW.js";import"./iframe-BKUC5TR5.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const c="The quick brown fox jumps over the lazy dog";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tokens/Typography"}),`
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
`,e.jsxs(p,{children:[e.jsx(l,{style:{fontSize:o.typography.fontSize.medium},children:"My custom heading"}),e.jsx(h,{style:{fontWeight:o.typography.fontWeight.black},children:"My custom text"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { AppCard, Centered, Heading, Spinner, tokens } from 'mirotone-react';

function App() {
  return (
    <>
      <Heading style={{ fontSize: tokens.typography.fontSize.medium }}>My custom heading</Heading>
      <Text style={{ fontWeight: tokens.typography.fontWeight.black }}>My custom text</Text>
    </>
  );
}
`})})]})}function b(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as SampleText,b as default};
