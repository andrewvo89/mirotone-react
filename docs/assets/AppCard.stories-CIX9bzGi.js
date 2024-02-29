import{A as o,j as r,b as c,c as z,d as S,e as J,T as e}from"./TagButton-BTV2ocKf.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const R={small:"var(--border-radius-small)",medium:"var(--border-radius-medium)",large:"var(--border-radius-large)",xlarge:"var(--border-radius-xlarge)",xxlarge:"var(--border-radius-xxlarge)",circle:"var(--border-radius-circle)"},E={blue:{100:"var(--blue100)",200:"var(--blue200)",300:"var(--blue300)",400:"var(--blue400)",500:"var(--blue500)",600:"var(--blue600)",700:"var(--blue700)",800:"var(--blue800)",900:"var(--blue900)"},indigo:{50:"var(--indigo50)",100:"var(--indigo100)",200:"var(--indigo200)",300:"var(--indigo300)",400:"var(--indigo400)",500:"var(--indigo500)",600:"var(--indigo600)",700:"var(--indigo700)"},indigoAlpha:{4:"var(--indigoAlpha4)",6:"var(--indigoAlpha6)",8:"var(--indigoAlpha8)",12:"var(--indigoAlpha12)",20:"var(--indigoAlpha20)",40:"var(--indigoAlpha40)",80:"var(--indigoAlpha80)"},green:{100:"var(--green100)",400:"var(--green400)",700:"var(--green700)",800:"var(--green800)"},black:"var(--black)",blackAlpha:{20:"var(--blackAlpha20)",40:"var(--blackAlpha40)",60:"var(--blackAlpha60)",80:"var(--blackAlpha80)"},red:{50:"var(--red50)",100:"var(--red100)",400:"var(--red400)",600:"var(--red600)",700:"var(--red700)",800:"var(--red800)",900:"var(--red900)"},yellow:{100:"var(--yellow100)",400:"var(--yellow400)",700:"var(--yellow700)"},white:"var(--white)",whiteAlpha:{20:"var(--whiteAlpha20)",40:"var(--whiteAlpha40)",80:"var(--whiteAlpha80)"}},I={xxxsmall:"var(--space-xxxsmall)",xxsmall:"var(--space-xxsmall)",xsmall:"var(--space-xsmall)",small:"var(--space-small)",medium:"var(--space-medium)",large:"var(--space-large)",xlarge:"var(--space-xlarge)",xxlarge:"var(--space-xxlarge)",xxxlarge:"var(--space-xxxlarge)"},L={fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",bold:"var(--font-weight-bold)",black:"var(--font-weight-black)"},fontSize:{small:"var(--font-size-small)",medium:"var(--font-size-medium)",large:"var(--font-size-large)",xlarge:"var(--font-size-xlarge)",xxlarge:"var(--font-size-xxlarge)",xxxlarge:"var(--font-size-xxxlarge)"},font:{header:"--header-font",body:"--body-font"}},N={colors:E,typography:L,spacing:I,borderRadius:R},q={title:"Components/AppCard",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s={},l={render:a=>r.jsxs(o,{...a,children:[r.jsx(c,{children:"App card title"}),r.jsx(z,{children:"App card description"}),r.jsxs(S,{children:[r.jsxs(J,{children:[r.jsx(e,{children:"Tag"}),r.jsx(e,{backgroundColor:"var(--yellow700)",children:"Another tag"}),r.jsx(e,{textColor:"var(--green700)",children:"Just one more"}),r.jsx(e,{children:"JIRA-1234"}),r.jsx(e,{icon:"link",children:"A tag with icon"})]}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"app-card--app-logo",children:r.jsx("circle",{r:"12",cx:"12",cy:"12",fill:N.colors.indigo[700]})})]})]})},i={args:{accentColor:"var(--indigo600)"}},p={render:a=>r.jsx(o,{...a,children:r.jsx(c,{children:"App card title"})})},n={render:a=>r.jsxs(o,{...a,children:[r.jsx(c,{children:"App card title"}),r.jsx(z,{children:"App card description"})]})},d={render:a=>r.jsx(o,{...a,children:r.jsxs(S,{children:[r.jsx(J,{}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"app-card--app-logo",children:r.jsx("circle",{r:"12",cx:"12",cy:"12",fill:N.colors.indigo[700]})})]})})};var t,g,v;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,m,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
          <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
        </svg>
      </AppCardBody>
    </AppCard>
}`,...(A=(m=l.parameters)==null?void 0:m.docs)==null?void 0:A.source}}};var h,u,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    accentColor: 'var(--indigo600)'
  }
}`,...(C=(u=i.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var w,b,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
    </AppCard>
}`,...(T=(b=p.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var j,f,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
    </AppCard>
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var k,B,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardBody>
        <AppCardTags />
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
          <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
        </svg>
      </AppCardBody>
    </AppCard>
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const F=["Default","Composition","AccentColor","Title","Description","AppLogo"];export{i as AccentColor,d as AppLogo,l as Composition,s as Default,n as Description,p as Title,F as __namedExportsOrder,q as default};
