import{R as n,j as a}from"./GridItem-DyOCgcsL.js";import{r as v}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,D={title:"Components/RadioButton",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={},r={args:{value:!1},render:function(e){const[,_]=j(),h=l=>{var c;(c=e.onChange)==null||c.call(e,l),_({value:l})};return a.jsx(n,{...e,value:e.value,onChange:h})}},t={args:{label:"Option 1"}},s={render:()=>a.jsxs(v.Fragment,{children:[a.jsx(n,{label:"Option 1",name:"radio"}),a.jsx(n,{label:"Option 2",name:"radio"}),a.jsx(n,{label:"Option 3",name:"radio"})]})};var u,d,i;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var O,C,b;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Option 1'
  }
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var x,R,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Fragment>
      <RadioButton label='Option 1' name='radio' />
      <RadioButton label='Option 2' name='radio' />
      <RadioButton label='Option 3' name='radio' />
    </Fragment>
}`,...(f=(R=s.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const F=["Default","Controlled","Label","Multiple"];export{r as Controlled,o as Default,t as Label,s as Multiple,F as __namedExportsOrder,D as default};
