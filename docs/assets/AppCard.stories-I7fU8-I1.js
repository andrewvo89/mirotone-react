import{j as r}from"./jsx-runtime-CKrituN3.js";import{A as o,a as i,b as k,c as w,d as J,T as a}from"./Text-DGi8YrMI.js";import{L as R}from"./Logo-Bm7zB2dX.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";import"./index-BVjCO-_d.js";const G={title:"Components/App card",component:o,parameters:{layout:"centered"},argTypes:{accentColor:{defaultValue:{summary:"var(--blue600)"}}},tags:["autodocs"]},p={},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(i,{children:"App card title"}),r.jsx(k,{children:"App card description"}),r.jsxs(w,{children:[r.jsxs(J,{children:[r.jsx(a,{children:"Tag"}),r.jsx(a,{backgroundColor:"var(--yellow700)",children:"Another tag"}),r.jsx(a,{textColor:"var(--green700)",children:"Just one more"}),r.jsx(a,{children:"JIRA-1234"}),r.jsx(a,{icon:"link",children:"A tag with icon"})]}),r.jsx(R,{})]})]})},n={name:"Accent color",args:{accentColor:"var(--indigo600)"}},t={render:e=>r.jsx(o,{...e,children:r.jsx(i,{children:"App card title"})})},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(i,{children:"App card title"}),r.jsx(k,{children:"App card description"})]})},d={render:e=>r.jsx(o,{...e,children:r.jsxs(w,{children:[r.jsx(J,{}),r.jsx(R,{})]})})};var l,A,g;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(A=p.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var m,C,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
      <AppCardBody>
        <AppCardTags>
          <Tag>Tag</Tag>
          <Tag backgroundColor='var(--yellow700)'>Another tag</Tag>
          <Tag textColor='var(--green700)'>Just one more</Tag>
          <Tag>JIRA-1234</Tag>
          <Tag icon='link'>A tag with icon</Tag>
        </AppCardTags>
        <Logo />
      </AppCardBody>
    </AppCard>
}`,...(u=(C=s.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var T,x,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Accent color',
  args: {
    accentColor: 'var(--indigo600)'
  }
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var h,y,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
    </AppCard>
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var f,v,L;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
    </AppCard>
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var S,B,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardBody>
        <AppCardTags />
        <Logo />
      </AppCardBody>
    </AppCard>
}`,...(b=(B=d.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const H=["Default","Composition","AccentColor","Title","Description","AppLogo"];export{n as AccentColor,d as AppLogo,s as Composition,p as Default,c as Description,t as Title,H as __namedExportsOrder,G as default};
