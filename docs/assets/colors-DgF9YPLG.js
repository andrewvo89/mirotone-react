import{j as o}from"./jsx-runtime-CKrituN3.js";import{M as c,C as i,d as e}from"./index-CjpcEV-B.js";import{J as a,A as f,K as d,q as p}from"./Text-VnyhRAJn.js";import{t as l}from"./index-BVjCO-_d.js";import{D as m}from"./DocBlockContainer-CLNNcwUp.js";import{useMDXComponents as n}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-75YVIO8o.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./extends-CCbyfPlC.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function s(t){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},n(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{title:"Tokens/Colors"}),`
`,o.jsx(r.h1,{id:"colors",children:"Colors"}),`
`,o.jsxs(i,{children:[o.jsx(e,{title:"theme.color.primaryText",subtitle:"Primary text color",colors:{primaryText:"#050038"}}),o.jsx(e,{title:"theme.color.secondaryText",subtitle:"Secondary text color",colors:{secondaryText:"#5f5c80"}}),o.jsx(e,{title:"theme.color.primaryActionColor",subtitle:"Primary action color",colors:{primaryActionColor:"#4262ff"}}),o.jsx(e,{title:"tokens.color.blue",subtitle:"Blue colors",colors:{100:"#f4f6ff",200:"#f0f2ff",300:"#e8ecff",400:"#d9e0ff",500:"#b3c0ff",600:"#6881ff",700:"#4262ff",800:"#455bed",900:"#3d51d4"}}),o.jsx(e,{title:"tokens.color.indigo",subtitle:"Indigo colors",colors:{50:"#f5f5f7",100:"#f0f0f3",200:"#ebebef",300:"#e1e0e7",400:"#cdccd7",500:"#9b99af",600:"#5f5c80",700:"#050038"}}),o.jsx(e,{title:"tokens.color.indigoAlpha",subtitle:"Indigo alpha colors",colors:{4:"rgba(5, 0, 56, .04)",6:"rgba(5, 0, 56, .06)",8:"rgba(5, 0, 56, .08)",12:"rgba(5, 0, 56, .12)",20:"rgba(5, 0, 56, .2)",40:"rgba(5, 0, 56, .4)",80:"rgba(5, 0, 56, .8)"}}),o.jsx(e,{title:"tokens.color.green",subtitle:"Green colors",colors:{100:"#f5fff3",400:"#dfffd9",700:"#77cc66",800:"#3c862d"}}),o.jsx(e,{title:"tokens.color.black",subtitle:"Black color",colors:{black:"#090909"}}),o.jsx(e,{title:"tokens.color.blackAlpha",subtitle:"Black alpha colors",colors:{20:"rgba(9, 9, 9, .2)",40:"rgba(9, 9, 9, .4)",60:"rgba(9, 9, 9, .6)",80:"rgba(9, 9, 9, .8)"}}),o.jsx(e,{title:"tokens.color.red",subtitle:"Red colors",colors:{50:"#fef7f7",100:"#fdf2f2",400:"#f7d4d4",600:"#e15454",700:"#d92929",800:"#c71414",900:"#b80d0d"}}),o.jsx(e,{title:"tokens.color.yellow",subtitle:"Yellow colors",colors:{100:"#fffcf3",400:"#fff6d5",700:"#ffd02f"}}),o.jsx(e,{title:"tokens.color.white",subtitle:"White color",colors:{white:"#ffffff"}}),o.jsx(e,{title:"tokens.color.whiteAlpha",subtitle:"White alpha colors",colors:{20:"hsla(0, 0%, 100%, .2)",40:"hsla(0, 0%, 100%, .4)",80:"hsla(0, 0%, 100%, .8)"}})]}),`
`,o.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,o.jsxs(r.p,{children:["The colors are available as tokens in the ",o.jsx(r.code,{children:"tokens.color"})," object. You can use them in your components like this:"]}),`
`,o.jsxs(m,{children:[o.jsx(a,{style:{color:l.color.blue[900]},children:"My app card"}),o.jsx(f,{accentColor:l.color.yellow[700],children:o.jsx(d,{children:o.jsx(p,{spinnerColor:l.color.red[600]})})})]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-tsx",children:`import { AppCard, Centered, Heading, Spinner, tokens } from 'mirotone-react';

function App() {
  return (
    <>
      <Heading style={{ color: tokens.color.blue[900] }}>My app card</Heading>
      <AppCard accentColor={tokens.color.yellow[700]}>
        <Centered>
          <Spinner spinnerColor={tokens.color.red[600]} />
        </Centered>
      </AppCard>
    </>
  );
}
`})})]})}function H(t={}){const{wrapper:r}=Object.assign({},n(),t.components);return r?o.jsx(r,Object.assign({},t,{children:o.jsx(s,t)})):s(t)}export{H as default};
