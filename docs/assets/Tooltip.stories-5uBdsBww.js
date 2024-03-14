import{j as e}from"./jsx-runtime-CKrituN3.js";import{O as c,B as M,e as $,t as K}from"./Text-B-naBqNt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const{useArgs:U}=__STORYBOOK_MODULE_PREVIEW_API__,G={title:"Beta/Tooltip",component:c,args:{trigger:e.jsx(M,{children:"Hover over me"}),children:"This is a tooltip text."},parameters:{layout:"centered"},tags:["autodocs"]},r={},s={args:{delayDuration:1e3}},n={name:"Preferred side",args:{side:"right",open:!0},render:p=>e.jsx(c,{...p,children:`This is a ${p.side} tooltip text.`})},o={args:{size:"small",open:!0}},a={args:{size:"medium",open:!0}},t={args:{size:"large",open:!0}},i={args:{open:!0,trigger:e.jsx($,{children:"Tooltip trigger is over here"})},render:function(d){const{open:g,onOpenChange:l,...R}=d,[,I]=U(),u=m=>{l==null||l(m),I({open:m})};return e.jsxs("div",{style:{display:"flex",gap:K.space.small},children:[e.jsx(M,{onClick:()=>u(!g),children:"Toggle tooltip manually"}),e.jsx(c,{...R,onOpenChange:u,open:g,disableCloseOnOutside:!0,children:d.children})]})}};var h,x,O;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(O=(x=r.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var T,f,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    delayDuration: 1000
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,y,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Preferred side',
  args: {
    side: 'right',
    open: true
  },
  render: args => <Tooltip {...args}>{\`This is a \${args.side} tooltip text.\`}</Tooltip>
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var _,j,A;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    open: true
  }
}`,...(A=(j=o.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var v,z,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    open: true
  }
}`,...(B=(z=a.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,E,H;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'large',
    open: true
  }
}`,...(H=(E=t.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var k,b,L;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    open: true,
    trigger: <Text>Tooltip trigger is over here</Text>
  },
  render: function App(args) {
    const {
      open,
      onOpenChange,
      ...rest
    } = args;
    const [, setArgs] = useArgs();
    const onOpenChangeHandler = (open: boolean) => {
      onOpenChange?.(open);
      setArgs({
        open
      });
    };
    return <div style={{
      display: 'flex',
      gap: tokens.space.small
    }}>
        <Button onClick={() => onOpenChangeHandler(!open)}>Toggle tooltip manually</Button>
        <Tooltip {...rest} onOpenChange={onOpenChangeHandler} open={open} disableCloseOnOutside>
          {args.children}
        </Tooltip>
      </div>;
  }
}`,...(L=(b=i.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const J=["Default","DelayDuration","PreferredSide","Small","Medium","Large","Controlled"];export{i as Controlled,r as Default,s as DelayDuration,t as Large,a as Medium,n as PreferredSide,o as Small,J as __namedExportsOrder,G as default};
