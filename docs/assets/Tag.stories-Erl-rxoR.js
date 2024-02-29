import{T,j as s,L as b,a as h}from"./TagButton-BAfClaUy.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const v={title:"Components/Tag",component:T,args:{children:"Tag"},parameters:{layout:"centered"},tags:["autodocs"]},e={},o={args:{textColor:"var(--blackAlpha40)",backgroundColor:"var(--yellow700)"}},a={render:r=>s.jsx(b,{textColor:r.textColor,backgroundColor:r.backgroundColor,href:"https://example.com",rel:"noopener noreferrer",target:"_blank",children:"Link tag"})},t={render:r=>s.jsxs(T,{...r,children:["Tag with nested button",s.jsx(h,{icon:"close"})]})};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    textColor: 'var(--blackAlpha40)',
    backgroundColor: 'var(--yellow700)'
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,u,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <LinkTag textColor={args.textColor} backgroundColor={args.backgroundColor} href='https://example.com' rel='noopener noreferrer' target='_blank'>
      Link tag
    </LinkTag>
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var k,x,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Tag {...args}>
      Tag with nested button
      <TagButton icon='close' />
    </Tag>
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const w=["Default","Colored","Link","NestedButton"];export{o as Colored,e as Default,a as Link,t as NestedButton,w as __namedExportsOrder,v as default};
