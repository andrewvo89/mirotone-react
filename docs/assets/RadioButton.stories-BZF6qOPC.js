import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as v}from"./index-CBqU2yxZ.js";import{R as n}from"./Text-CBxG_OWd.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"Components/Radio button",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={},r={args:{value:!1},render:function(e){const[,_]=j(),h=l=>{var c;(c=e.onChange)==null||c.call(e,l),_({value:l})};return a.jsx(n,{...e,value:e.value,onChange:h})}},t={args:{label:"Option 1"}},s={render:()=>a.jsxs(v.Fragment,{children:[a.jsx(n,{label:"Option 1",name:"radio"}),a.jsx(n,{label:"Option 2",name:"radio"}),a.jsx(n,{label:"Option 3",name:"radio"})]})};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var i,p,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var O,b,C;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Option 1'
  }
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,x,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Fragment>
      <RadioButton label='Option 1' name='radio' />
      <RadioButton label='Option 2' name='radio' />
      <RadioButton label='Option 3' name='radio' />
    </Fragment>
}`,...(R=(x=s.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const H=["Default","Controlled","Label","Multiple"];export{r as Controlled,o as Default,t as Label,s as Multiple,H as __namedExportsOrder,F as default};
