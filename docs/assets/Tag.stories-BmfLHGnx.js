import{j as r}from"./index-CfptBk_o.js";import{x as A,z as L,T as v,A as S,E as B}from"./Text-w2RWykAU.js";import"./index-D4H_InIO.js";import"./index-vYCkCKEW.js";const R={title:"Components/Tag",component:A,argTypes:{textColor:{defaultValue:{summary:"var(--black)"}},backgroundColor:{defaultValue:{summary:"var(--indigo50)"}}},args:{children:"Tag"},parameters:{layout:"centered"},tags:["autodocs"]},o={},a={args:{textColor:"var(--blackAlpha40)",backgroundColor:"var(--yellow700)"}},t={render:e=>r.jsx(L,{textColor:e.textColor,backgroundColor:e.backgroundColor,href:"https://example.com",rel:"noopener noreferrer",target:"_blank",children:"Link tag"})},s={name:"Nested button",render:e=>r.jsxs(A,{...e,children:[r.jsx(v,{children:"Tag with nested button"}),r.jsx(S,{icon:"close"})]})},n={args:{icon:"link",children:"JIRA-1234"}},c={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(B,{src:"https://www.mirotone.xyz/profile.png",alt:"Profile photo",width:"16",height:"16"}),"Author: Mettin"]})}};var l,d,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var g,m,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    textColor: 'var(--blackAlpha40)',
    backgroundColor: 'var(--yellow700)'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <LinkTag textColor={args.textColor} backgroundColor={args.backgroundColor} href='https://example.com' rel='noopener noreferrer' target='_blank'>
      Link tag
    </LinkTag>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,T,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Nested button',
  render: args => <Tag {...args}>
      <Text>Tag with nested button</Text>
      <TagButton icon='close' />
    </Tag>
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var b,f,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: 'link',
    children: 'JIRA-1234'
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var j,y,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <>
        <TagImage src='https://www.mirotone.xyz/profile.png' alt='Profile photo' width='16' height='16' />
        Author: Mettin
      </>
  }
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const D=["Default","Colored","Link","NestedButton","Icon","Image"];export{a as Colored,o as Default,n as Icon,c as Image,t as Link,s as NestedButton,D as __namedExportsOrder,R as default};
