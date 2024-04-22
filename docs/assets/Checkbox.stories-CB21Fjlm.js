import{j as x}from"./jsx-runtime-DRTy3Uxn.js";import{C as i}from"./Text-Drqb0Ygr.js";import"./index-BBkUAzwr.js";import"./index-BUy04y1F.js";import"./index-PqR-_bA4.js";const{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Components/Checkbox",component:i,parameters:{layout:"centered"},tags:["autodocs"]},o={},r={args:{value:!1},render:function(e){const[,h]=f(),b=a=>{var s;(s=e.onChange)==null||s.call(e,a),h({value:a})};return x.jsx(i,{...e,value:e.value,onChange:b})}},n={args:{label:"Checkbox"}};var t,c,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    return <Checkbox {...args} value={args.value} onChange={onChangeHandler} />;
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const j=["Default","Controlled","Label"];export{r as Controlled,o as Default,n as Label,j as __namedExportsOrder,S as default};
