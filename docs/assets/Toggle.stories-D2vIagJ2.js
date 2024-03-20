import{j as v}from"./jsx-runtime-DRTy3Uxn.js";import{J as C}from"./Text-DcJ0cxFT.js";import"./index-BBkUAzwr.js";import"./index-BUy04y1F.js";import"./index-PqR-_bA4.js";const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Components/Toggle",component:C,parameters:{layout:"centered"},tags:["autodocs"]},o={},r={args:{value:!1},render:function(e){const[,f]=h(),_=a=>{var s;(s=e.onChange)==null||s.call(e,a),f({value:a})};return v.jsx(C,{...e,value:e.value,onChange:_})}},n={args:{label:"Toggle"}};var t,l,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,g,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    return <Toggle {...args} value={args.value} onChange={onChangeHandler} />;
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,d,i;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Toggle'
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const j=["Default","Controlled","Label"];export{r as Controlled,o as Default,n as Label,j as __namedExportsOrder,S as default};
