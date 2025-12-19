import{j as r}from"./index-CfptBk_o.js";import{K as o,M as i,N as w,O as J,P as b,x as a}from"./Text-w2RWykAU.js";import{L as R}from"./Logo-UE4CI-EE.js";import"./index-D4H_InIO.js";import"./index-vYCkCKEW.js";const M={title:"Components/App card",component:o,parameters:{layout:"centered"},argTypes:{accentColor:{defaultValue:{summary:"var(--blue600)"}}},tags:["autodocs"]},p={},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(i,{children:"App card title"}),r.jsx(w,{children:"App card description"}),r.jsxs(J,{children:[r.jsxs(b,{children:[r.jsx(a,{children:"Tag"}),r.jsx(a,{backgroundColor:"var(--yellow700)",children:"Another tag"}),r.jsx(a,{textColor:"var(--green700)",children:"Just one more"}),r.jsx(a,{children:"JIRA-1234"}),r.jsx(a,{icon:"link",children:"A tag with icon"})]}),r.jsx(R,{})]})]})},n={name:"Accent color",args:{accentColor:"var(--indigo600)"}},t={render:e=>r.jsx(o,{...e,children:r.jsx(i,{children:"App card title"})})},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(i,{children:"App card title"}),r.jsx(w,{children:"App card description"})]})},d={render:e=>r.jsx(o,{...e,children:r.jsxs(J,{children:[r.jsx(b,{}),r.jsx(R,{})]})})};var l,A,g;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(A=p.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var m,C,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(C=s.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var x,T,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Accent color',
  args: {
    accentColor: 'var(--indigo600)'
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var h,y,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
    </AppCard>
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var f,v,L;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
    </AppCard>
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var S,B,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardBody>
        <AppCardTags />
        <Logo />
      </AppCardBody>
    </AppCard>
}`,...(k=(B=d.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const N=["Default","Composition","AccentColor","Title","Description","AppLogo"];export{n as AccentColor,d as AppLogo,s as Composition,p as Default,c as Description,t as Title,N as __namedExportsOrder,M as default};
