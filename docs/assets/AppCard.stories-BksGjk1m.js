import{A as e,j as a,a as i,b as D,c as z,d as S}from"./Icon-C5MLcGE3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const J={small:"var(--border-radius-small)",medium:"var(--border-radius-medium)",large:"var(--border-radius-large)",xlarge:"var(--border-radius-xlarge)",xxlarge:"var(--border-radius-xxlarge)",circle:"var(--border-radius-circle)"},R={blue:{100:"var(--blue100)",200:"var(--blue200)",300:"var(--blue300)",400:"var(--blue400)",500:"var(--blue500)",600:"var(--blue600)",700:"var(--blue700)",800:"var(--blue800)",900:"var(--blue900)"},indigo:{50:"var(--indigo50)",100:"var(--indigo100)",200:"var(--indigo200)",300:"var(--indigo300)",400:"var(--indigo400)",500:"var(--indigo500)",600:"var(--indigo600)",700:"var(--indigo700)"},indigoAlpha:{4:"var(--indigoAlpha4)",6:"var(--indigoAlpha6)",8:"var(--indigoAlpha8)",12:"var(--indigoAlpha12)",20:"var(--indigoAlpha20)",40:"var(--indigoAlpha40)",80:"var(--indigoAlpha80)"},green:{100:"var(--green100)",400:"var(--green400)",700:"var(--green700)",800:"var(--green800)"},black:"var(--black)",blackAlpha:{20:"var(--blackAlpha20)",40:"var(--blackAlpha40)",60:"var(--blackAlpha60)",80:"var(--blackAlpha80)"},red:{50:"var(--red50)",100:"var(--red100)",400:"var(--red400)",600:"var(--red600)",700:"var(--red700)",800:"var(--red800)",900:"var(--red900)"}},E={xxxsmall:"var(--space-xxxsmall)",xxsmall:"var(--space-xxsmall)",xsmall:"var(--space-xsmall)",small:"var(--space-small)",medium:"var(--space-medium)",large:"var(--space-large)",xlarge:"var(--space-xlarge)",xxlarge:"var(--space-xxlarge)",xxxlarge:"var(--space-xxxlarge)"},I={fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",bold:"var(--font-weight-bold)",black:"var(--font-weight-black)"},fontSize:{small:"var(--font-size-small)",medium:"var(--font-size-medium)",large:"var(--font-size-large)",xlarge:"var(--font-size-xlarge)",xxlarge:"var(--font-size-xxlarge)",xxxlarge:"var(--font-size-xxxlarge)"},font:{header:"--header-font",body:"--body-font"}},d={colors:R,typography:I,spacing:E,borderRadius:J},W={title:"Components/AppCard",component:e,parameters:{layout:"centered"},tags:["autodocs"]},s={},o={render:r=>a.jsxs(e,{...r,children:[a.jsx(i,{children:"App card title"}),a.jsx(D,{children:"App card description"}),a.jsxs(z,{children:[a.jsxs(S,{children:[a.jsx("span",{className:"tag",children:"Tag"}),a.jsx("span",{className:"tag",style:{"--background":"var(--yellow700)"},children:"Another tag"}),a.jsx("span",{className:"tag",style:{"--color":"var(--green700)"},children:"Just one more"}),a.jsx("span",{className:"tag",children:"JIRA-1234"}),a.jsx("span",{className:"tag icon icon-link",children:"A tag with icon"})]}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"app-card--app-logo",children:a.jsx("circle",{r:"12",cx:"12",cy:"12",fill:d.colors.indigo[700]})})]})]})},n={args:{accentColor:d.colors.indigo[600]}},p={render:r=>a.jsx(e,{...r,children:a.jsx(i,{children:"App card title"})})},l={render:r=>a.jsxs(e,{...r,children:[a.jsx(i,{children:"App card title"}),a.jsx(D,{children:"App card description"})]})},c={render:r=>a.jsx(e,{...r,children:a.jsxs(z,{children:[a.jsx(S,{}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"app-card--app-logo",children:a.jsx("circle",{r:"12",cx:"12",cy:"12",fill:d.colors.indigo[700]})})]})})};var t,g,m;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,x,A;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <BaseAppCard {...args}>
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
    </BaseAppCard>
}`,...(A=(x=o.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var u,h,C;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    accentColor: tokens.colors.indigo[600]
  }
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var b,w,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <BaseAppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
    </BaseAppCard>
}`,...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var f,y,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <BaseAppCard {...args}>
      <AppCardTitle>App card title</AppCardTitle>
      <AppCardDescription>App card description</AppCardDescription>
    </BaseAppCard>
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var B,T,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <BaseAppCard {...args}>
      <AppCardBody>
        <AppCardTags />
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
          <circle r='12' cx='12' cy='12' fill={tokens.colors.indigo[700]}></circle>
        </svg>
      </AppCardBody>
    </BaseAppCard>
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const q=["Default","Complete","AccentColor","Title","Description","AppLogo"];export{n as AccentColor,c as AppLogo,o as Complete,s as Default,l as Description,p as Title,q as __namedExportsOrder,W as default};
