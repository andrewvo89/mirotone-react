import{j as t}from"./jsx-runtime-CKrituN3.js";import{M as p,T as i}from"./index-D_j-9SHe.js";import{H as h,z as m}from"./Text-Dud5oAvr.js";import{t as n}from"./index-BVjCO-_d.js";import{D as g}from"./DocBlockContainer-CLNNcwUp.js";import{useMDXComponents as a}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C4F5-gfB.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";const r="small (12), medium (14), large (16), xlarge (20), xxlarge (24), xxxlarge (28).";function s(o){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},a(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Tokens/Typography"}),`
`,`
`,t.jsx(e.h1,{id:"typography",children:"Typography"}),`
`,t.jsx(e.h2,{id:"normal-weight",children:"Normal weight"}),`
`,t.jsx(i,{fontSizes:[12,14,16,20,24,28],fontWeight:n.typography.fontWeight.normal,sampleText:r,fontFamily:n.typography.font}),`
`,t.jsx(e.h2,{id:"medium-weight",children:"Medium weight"}),`
`,t.jsx(i,{fontSizes:[12,14,16,20,24,28],fontWeight:n.typography.fontWeight.medium,sampleText:r,fontFamily:n.typography.font}),`
`,t.jsx(e.h2,{id:"bold-weight",children:"Bold weight"}),`
`,t.jsx(i,{fontSizes:[12,14,16,20,24,28],fontWeight:n.typography.fontWeight.bold,sampleText:r,fontFamily:n.typography.font}),`
`,t.jsx(e.h2,{id:"black-weight",children:"Black weight"}),`
`,t.jsx(i,{fontSizes:[12,14,16,20,24,28],fontWeight:n.typography.fontWeight.black,sampleText:r,fontFamily:n.typography.font}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(g,{children:[t.jsx(h,{style:{fontSize:n.typography.fontSize.medium},children:"My custom heading"}),t.jsx(m,{style:{fontWeight:n.typography.fontWeight.black},children:"My custom text"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { AppCard, Centered, Heading, Spinner, tokens } from 'mirotone-react';

function App() {
  return (
    <>
      <Heading style={{ fontSize: tokens.typography.fontSize.medium }}>My custom heading</Heading>
      <Text style={{ fontWeight: tokens.typography.fontWeight.black }}>My custom text</Text>
    </>
  );
}
`})})]})}function w(o={}){const{wrapper:e}=Object.assign({},a(),o.components);return e?t.jsx(e,Object.assign({},o,{children:t.jsx(s,o)})):s(o)}export{r as SampleText,w as default};
