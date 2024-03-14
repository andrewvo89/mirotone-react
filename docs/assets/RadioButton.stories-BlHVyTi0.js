import{j as n}from"./jsx-runtime-CKrituN3.js";import{R as a,t as h}from"./Text-B-naBqNt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Radio button",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={},r={args:{value:!1},render:function(e){const[,R]=j(),_=l=>{var i;(i=e.onChange)==null||i.call(e,l),R({value:l})};return n.jsx(a,{...e,value:e.value,onChange:_})}},t={args:{label:"Option 1"}},s={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:h.space.xsmall},children:[n.jsx(a,{label:"Option 1",name:"radio"}),n.jsx(a,{label:"Option 2",name:"radio"}),n.jsx(a,{label:"Option 3",name:"radio"})]})};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: false
  },
  render: function Component(args) {
    const [, setArgs] = useArgs();
    const onChangeHandler = (value: boolean) => {
      args.onChange?.(value);
      setArgs({
        value
      });
    };
    return <RadioButton {...args} value={args.value} onChange={onChangeHandler} />;
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,O;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Option 1'
  }
}`,...(O=(f=t.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var b,C,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.space.xsmall
  }}>
      <RadioButton label='Option 1' name='radio' />
      <RadioButton label='Option 2' name='radio' />
      <RadioButton label='Option 3' name='radio' />
    </div>
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const M=["Default","Controlled","Label","Multiple"];export{r as Controlled,o as Default,t as Label,s as Multiple,M as __namedExportsOrder,L as default};
