import{A as e,j as a,b as c,c as D,d as z,e as S}from"./TagButton-CwisYKG6.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const J={small:"var(--border-radius-small)",medium:"var(--border-radius-medium)",large:"var(--border-radius-large)",xlarge:"var(--border-radius-xlarge)",xxlarge:"var(--border-radius-xxlarge)",circle:"var(--border-radius-circle)"},R={blue:{100:"var(--blue100)",200:"var(--blue200)",300:"var(--blue300)",400:"var(--blue400)",500:"var(--blue500)",600:"var(--blue600)",700:"var(--blue700)",800:"var(--blue800)",900:"var(--blue900)"},indigo:{50:"var(--indigo50)",100:"var(--indigo100)",200:"var(--indigo200)",300:"var(--indigo300)",400:"var(--indigo400)",500:"var(--indigo500)",600:"var(--indigo600)",700:"var(--indigo700)"},indigoAlpha:{4:"var(--indigoAlpha4)",6:"var(--indigoAlpha6)",8:"var(--indigoAlpha8)",12:"var(--indigoAlpha12)",20:"var(--indigoAlpha20)",40:"var(--indigoAlpha40)",80:"var(--indigoAlpha80)"},green:{100:"var(--green100)",400:"var(--green400)",700:"var(--green700)",800:"var(--green800)"},black:"var(--black)",blackAlpha:{20:"var(--blackAlpha20)",40:"var(--blackAlpha40)",60:"var(--blackAlpha60)",80:"var(--blackAlpha80)"},red:{50:"var(--red50)",100:"var(--red100)",400:"var(--red400)",600:"var(--red600)",700:"var(--red700)",800:"var(--red800)",900:"var(--red900)"},yellow:{100:"var(--yellow100)",400:"var(--yellow400)",700:"var(--yellow700)"},white:"var(--white)",whiteAlpha:{20:"var(--whiteAlpha20)",40:"var(--whiteAlpha40)",80:"var(--whiteAlpha80)"}},E={xxxsmall:"var(--space-xxxsmall)",xxsmall:"var(--space-xxsmall)",xsmall:"var(--space-xsmall)",small:"var(--space-small)",medium:"var(--space-medium)",large:"var(--space-large)",xlarge:"var(--space-xlarge)",xxlarge:"var(--space-xxlarge)",xxxlarge:"var(--space-xxxlarge)"},I={fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",bold:"var(--font-weight-bold)",black:"var(--font-weight-black)"},fontSize:{small:"var(--font-size-small)",medium:"var(--font-size-medium)",large:"var(--font-size-large)",xlarge:"var(--font-size-xlarge)",xxlarge:"var(--font-size-xxlarge)",xxxlarge:"var(--font-size-xxxlarge)"},font:{header:"--header-font",body:"--body-font"}},d={colors:R,typography:I,spacing:E,borderRadius:J},W={title:"Components/AppCard",component:e,parameters:{layout:"centered"},tags:["autodocs"]},s={},o={render:r=>a.jsxs(e,{...r,children:[a.jsx(c,{children:"App card title"}),a.jsx(D,{children:"App card description"}),a.jsxs(z,{children:[a.jsxs(S,{children:[a.jsx("span",{className:"tag",children:"Tag"}),a.jsx("span",{className:"tag",style:{"--background":"var(--yellow700)"},children:"Another tag"}),a.jsx("span",{className:"tag",style:{"--color":"var(--green700)"},children:"Just one more"}),a.jsx("span",{className:"tag",children:"JIRA-1234"}),a.jsx("span",{className:"tag icon icon-link",children:"A tag with icon"})]}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"app-card--app-logo",children:a.jsx("circle",{r:"12",cx:"12",cy:"12",fill:d.colors.indigo[700]})})]})]})},n={args:{accentColor:d.colors.indigo[600]}},l={render:r=>a.jsx(e,{...r,children:a.jsx(c,{children:"App card title"})})},p={render:r=>a.jsxs(e,{...r,children:[a.jsx(c,{children:"App card title"}),a.jsx(D,{children:"App card description"})]})},i={render:r=>a.jsx(e,{...r,children:a.jsxs(z,{children:[a.jsx(S,{}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"app-card--app-logo",children:a.jsx("circle",{r:"12",cx:"12",cy:"12",fill:d.colors.indigo[700]})})]})})};var t,g,v;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var m,x,A;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
      <AppCardBody>
        <AppCardTags>
          <span className='tag'>Tag</span>
          <span className='tag' style={{
          '--background': 'var(--yellow700)'
        }}>
            Another tag
          </span>
          <span className='tag' style={{
          '--color': 'var(--green700)'
        }}>
            Just one more
          </span>
          <span className='tag'>JIRA-1234</span>
          <span className='tag icon icon-link'>A tag with icon</span>
        </AppCardTags>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
          <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
        </svg>
      </AppCardBody>
    </AppCard>
}`,...(A=(x=o.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var h,u,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    accentColor: tokens.colors.indigo[600]
  }
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var C,b,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
    </AppCard>
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,f,k;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
    </AppCard>
}`,...(k=(f=p.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var T,N,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <AppCard {...args}>
      <AppCardBody>
        <AppCardTags />
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
          <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
        </svg>
      </AppCardBody>
    </AppCard>
}`,...(B=(N=i.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const q=["Default","Composition","AccentColor","Title","Description","AppLogo"];export{n as AccentColor,i as AppLogo,o as Composition,s as Default,p as Description,l as Title,q as __namedExportsOrder,W as default};
