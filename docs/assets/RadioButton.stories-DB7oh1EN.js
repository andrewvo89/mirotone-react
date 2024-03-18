import{j as a}from"./jsx-runtime-CKrituN3.js";import{R as o,F as v,t as j}from"./Text-C25W4Ap0.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,M={title:"Components/Radio button",component:o,parameters:{layout:"centered"},tags:["autodocs"]},n={},r={args:{value:!1},render:function(e){const[,_]=A(),h=l=>{var c;(c=e.onChange)==null||c.call(e,l),_({value:l})};return a.jsx(o,{...e,value:e.value,onChange:h})}},t={args:{label:"Option 1"}},s={render:()=>a.jsxs(v,{flexDirection:"column",gap:j.space.xsmall,children:[a.jsx(o,{label:"Option 1",name:"radio"}),a.jsx(o,{label:"Option 2",name:"radio"}),a.jsx(o,{label:"Option 3",name:"radio"})]})};var i,p,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,O,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Option 1'
  }
}`,...(b=(O=t.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var C,f,R;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex flexDirection='column' gap={tokens.space.xsmall}>
      <RadioButton label='Option 1' name='radio' />
      <RadioButton label='Option 2' name='radio' />
      <RadioButton label='Option 3' name='radio' />
    </Flex>
}`,...(R=(f=s.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};const k=["Default","Controlled","Label","Multiple"];export{r as Controlled,n as Default,t as Label,s as Multiple,k as __namedExportsOrder,M as default};
