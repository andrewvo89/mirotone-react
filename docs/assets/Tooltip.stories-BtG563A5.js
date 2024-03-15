import{j as e}from"./jsx-runtime-CKrituN3.js";import{e as c,B as I,T as M,F as R,t as $}from"./Text-CqINtZk8.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const{useArgs:K}=__STORYBOOK_MODULE_PREVIEW_API__,J={title:"Beta/Tooltip",component:c,argTypes:{size:{defaultValue:{summary:"medium"}},delayDuration:{defaultValue:{summary:500}},disableCloseOnOutside:{defaultValue:{summary:!1}}},args:{trigger:e.jsx(I,{children:"Hover over me"}),children:"This is a tooltip text."},parameters:{layout:"centered"},tags:["autodocs"]},r={},s={args:{delayDuration:1e3}},n={name:"Preferred side",args:{side:"right",open:!0},render:l=>e.jsx(c,{...l,children:`This is a ${l.side} tooltip text.`})},o={args:{size:"small",open:!0}},a={args:{size:"medium",open:!0}},t={args:{size:"large",open:!0}},i={args:{open:!0,trigger:e.jsx(M,{children:"Tooltip trigger is over here"})},render:function(d){const{open:u,onOpenChange:p,...V}=d,[,L]=K(),m=g=>{p==null||p(g),L({open:g})};return e.jsxs(R,{gap:$.space.small,alignItems:"center",children:[e.jsx(I,{onClick:()=>m(!u),children:"Toggle tooltip manually"}),e.jsx(c,{...V,onOpenChange:m,open:u,disableCloseOnOutside:!0,children:d.children})]})}};var h,x,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var O,f,C;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    delayDuration: 1000
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,S,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Preferred side',
  args: {
    side: 'right',
    open: true
  },
  render: args => <Tooltip {...args}>{\`This is a \${args.side} tooltip text.\`}</Tooltip>
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var _,j,A;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    open: true
  }
}`,...(A=(j=o.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var z,B,P;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    open: true
  }
}`,...(P=(B=a.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var E,H,b;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'large',
    open: true
  }
}`,...(b=(H=t.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var k,v,F;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    return <Flex gap={tokens.space.small} alignItems='center'>
        <Button onClick={() => onOpenChangeHandler(!open)}>Toggle tooltip manually</Button>
        <Tooltip {...rest} onOpenChange={onOpenChangeHandler} open={open} disableCloseOnOutside>
          {args.children}
        </Tooltip>
      </Flex>;
  }
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const N=["Default","DelayDuration","PreferredSide","Small","Medium","Large","Controlled"];export{i as Controlled,r as Default,s as DelayDuration,t as Large,a as Medium,n as PreferredSide,o as Small,N as __namedExportsOrder,J as default};
