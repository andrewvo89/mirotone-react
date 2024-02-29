import{C as i,j as x}from"./TagButton-BAfClaUy.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Checkbox",component:i,args:{},parameters:{layout:"centered"},tags:["autodocs"]},o={},r={render:function(e){const[,h]=_(),b=s=>{var a;(a=e.onChange)==null||a.call(e,s),h({value:s})};return x.jsx(i,{...e,onChange:b})},args:{value:!1}},n={args:{label:"Checkbox"}};var t,c,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Component(args) {
    const [, setArgs] = useArgs();
    const onChange = (value: boolean) => {
      args.onChange?.(value);
      setArgs({
        value
      });
    };
    return <Checkbox {...args} onChange={onChange} />;
  },
  args: {
    value: false
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const v=["Default","Controlled","Label"];export{r as Controlled,o as Default,n as Label,v as __namedExportsOrder,O as default};
