import{C as i,j as x}from"./GridItem-BGR8QeLg.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/Checkbox",component:i,parameters:{layout:"centered"},tags:["autodocs"]},n={},o={args:{value:!1},render:function(e){const[,h]=_(),b=a=>{var s;(s=e.onChange)==null||s.call(e,a),h({value:a})};return x.jsx(i,{...e,value:e.value,onChange:b})}},r={args:{label:"Checkbox"}};var t,c,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,C;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const O=["Default","Controlled","Label"];export{o as Controlled,n as Default,r as Label,O as __namedExportsOrder,E as default};
