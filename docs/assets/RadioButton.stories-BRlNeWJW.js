import{R as n,j as a}from"./TagButton-Ub7QyvUx.js";import{r as h}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,D={title:"Components/RadioButton",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={},r={args:{value:!1},render:function(e){const[,_]=j(),v=l=>{var c;(c=e.onChange)==null||c.call(e,l),_({value:l})};return a.jsx(n,{...e,value:e.value,onChange:v})}},t={args:{label:"Option 1"}},s={render:()=>a.jsxs(h.Fragment,{children:[a.jsx(n,{label:"Option 1",name:"radio"}),a.jsx(n,{label:"Option 2",name:"radio"}),a.jsx(n,{label:"Option 3",name:"radio"})]})};var u,i,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: false
  },
  render: function Component(args) {
    const [, setArgs] = useArgs();
    const onChange = (value: boolean) => {
      args.onChange?.(value);
      setArgs({
        value
      });
    };
    return <RadioButton {...args} value={args.value} onChange={onChange} />;
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var O,b,C;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Option 1'
  }
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,R,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Fragment>
      <RadioButton label='Option 1' name='radio' />
      <RadioButton label='Option 2' name='radio' />
      <RadioButton label='Option 3' name='radio' />
    </Fragment>
}`,...(f=(R=s.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const F=["Default","Controlled","Label","Multiple"];export{r as Controlled,o as Default,t as Label,s as Multiple,F as __namedExportsOrder,D as default};
