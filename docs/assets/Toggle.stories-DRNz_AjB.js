import{x as C,j as h}from"./GridItem-BGR8QeLg.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:v}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Toggle",component:C,parameters:{layout:"centered"},tags:["autodocs"]},n={},o={args:{value:!1},render:function(e){const[,_]=v(),f=a=>{var s;(s=e.onChange)==null||s.call(e,a),_({value:a})};return h.jsx(C,{...e,value:e.value,onChange:f})}},r={args:{label:"Toggle"}};var t,l,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,g,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,d,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Toggle'
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const T=["Default","Controlled","Label"];export{o as Controlled,n as Default,r as Label,T as __namedExportsOrder,O as default};
