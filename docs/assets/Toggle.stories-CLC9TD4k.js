import{j as h}from"./jsx-runtime-CKrituN3.js";import{y as C}from"./Text-BBUtkMyR.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:v}=__STORYBOOK_MODULE_PREVIEW_API__,T={title:"Components/Toggle",component:C,parameters:{layout:"centered"},tags:["autodocs"]},o={},n={args:{value:!1},render:function(e){const[,f]=v(),_=a=>{var s;(s=e.onChange)==null||s.call(e,a),f({value:a})};return h.jsx(C,{...e,value:e.value,onChange:_})}},r={args:{label:"Toggle"}};var t,l,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,g,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,d,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Toggle'
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const S=["Default","Controlled","Label"];export{n as Controlled,o as Default,r as Label,S as __namedExportsOrder,T as default};
