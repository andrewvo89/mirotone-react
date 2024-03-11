import{j as s}from"./jsx-runtime-CKrituN3.js";import{T,y as b,e as h,z as f}from"./Text-foCQQ9-9.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const N={title:"Components/Tag",component:T,argTypes:{textColor:{defaultValue:{summary:"var(--black)"}},backgroundColor:{defaultValue:{summary:"var(--indigo50)"}}},args:{children:"Tag"},parameters:{layout:"centered"},tags:["autodocs"]},e={},o={args:{textColor:"var(--blackAlpha40)",backgroundColor:"var(--yellow700)"}},a={render:r=>s.jsx(b,{textColor:r.textColor,backgroundColor:r.backgroundColor,href:"https://example.com",rel:"noopener noreferrer",target:"_blank",children:"Link tag"})},t={name:"Nested button",render:r=>s.jsxs(T,{...r,children:[s.jsx(h,{children:"Tag with nested button"}),s.jsx(f,{icon:"close"})]})};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    textColor: 'var(--blackAlpha40)',
    backgroundColor: 'var(--yellow700)'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,p,i;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <LinkTag textColor={args.textColor} backgroundColor={args.backgroundColor} href='https://example.com' rel='noopener noreferrer' target='_blank'>
      Link tag
    </LinkTag>
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var x,k,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Nested button',
  render: args => <Tag {...args}>
      <Text>Tag with nested button</Text>
      <TagButton icon='close' />
    </Tag>
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const S=["Default","Colored","Link","NestedButton"];export{o as Colored,e as Default,a as Link,t as NestedButton,S as __namedExportsOrder,N as default};
