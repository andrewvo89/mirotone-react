import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{R as n,F as v,t as j}from"./Text-Drqb0Ygr.js";import"./index-BBkUAzwr.js";import"./index-BUy04y1F.js";import"./index-PqR-_bA4.js";const{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Radio button",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={},r={args:{value:!1},render:function(e){const[,_]=A(),h=l=>{var c;(c=e.onChange)==null||c.call(e,l),_({value:l})};return a.jsx(n,{...e,value:e.value,onChange:h})}},t={args:{label:"Option 1"}},s={render:()=>a.jsxs(v,{flexDirection:"column",gap:j.space.xsmall,children:[a.jsx(n,{label:"Option 1",name:"radio"}),a.jsx(n,{label:"Option 2",name:"radio"}),a.jsx(n,{label:"Option 3",name:"radio"})]})};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(R=(f=s.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};const M=["Default","Controlled","Label","Multiple"];export{r as Controlled,o as Default,t as Label,s as Multiple,M as __namedExportsOrder,L as default};
