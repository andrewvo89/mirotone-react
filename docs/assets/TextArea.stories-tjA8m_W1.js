import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as z}from"./index-CBqU2yxZ.js";import{v as t,F as n,f as o,h as E,i as x}from"./Text-CBxG_OWd.js";import{t as V}from"./index-BVjCO-_d.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__;function H(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("circle",{r:"12",cx:"12",cy:"12",fill:V.color.indigo[700]})})}const W={title:"Components/Text area",component:t,args:{placeholder:"Placeholder text",size:"medium",value:""},parameters:{layout:"centered"},tags:["autodocs"]},s={render:r=>e.jsxs(n,{children:[e.jsx(o,{htmlFor:"textarea-example",children:"Textarea"}),e.jsx(t,{id:"textarea-example",...r})]})},l={args:{value:"Controlled text"},render:function(a){const[,_]=k(),w=i=>{var p;(p=a.onChange)==null||p.call(a,i),_({value:i})};return e.jsxs(n,{children:[e.jsx(o,{htmlFor:"textarea-controlled",children:"TextArea"}),z.createElement(t,{...a,key:a.value,id:"textarea-controlled",onChange:w,value:a.value,defaultValue:a.value})]})}},d={args:{size:"small"},render:r=>e.jsxs(n,{size:"small",children:[e.jsx(o,{htmlFor:"small-textarea-example",children:"Small textarea"}),e.jsx(t,{...r,id:"small-textarea-example",size:"small"})]})},u={args:{placeholder:void 0},render:r=>e.jsxs(n,{children:[e.jsx(o,{htmlFor:"do-you-use-vcs",children:"I have a decoration"}),e.jsxs(E,{children:[e.jsx(x,{borderRight:!0,children:"In the form of a text:"}),e.jsx(t,{...r,id:"do-you-use-vcs",rows:5}),e.jsx(x,{children:e.jsx(H,{})})]})]})},c={args:{isDisabled:!0,defaultValue:"Content"},render:r=>e.jsxs(n,{isDisabled:!0,children:[e.jsx(o,{htmlFor:"textarea-disabled",children:"I'm disabled"}),e.jsx(t,{id:"textarea-disabled",...r})]})},m={args:{isReadOnly:!0,defaultValue:"Content"},render:r=>e.jsxs(n,{children:[e.jsx(o,{htmlFor:"textarea-readonly",children:"I'm read-only"}),e.jsx(t,{id:"textarea-readonly",...r})]})};var g,h,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='textarea-example'>Textarea</InputLabel>
      <TextArea id='textarea-example' {...args} />
    </FormGroup>
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var b,F,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'Controlled text'
  },
  render: function Component(args) {
    const [, setArgs] = useArgs();
    const onChangeHandler = (value: string) => {
      args.onChange?.(value);
      setArgs({
        value
      });
    };
    return <FormGroup>
        <InputLabel htmlFor='textarea-controlled'>TextArea</InputLabel>
        <TextArea {...args} key={args.value} id='textarea-controlled' onChange={onChangeHandler} value={args.value} defaultValue={args.value} />
      </FormGroup>;
  }
}`,...(j=(F=l.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var v,f,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <FormGroup size='small'>
      <InputLabel htmlFor='small-textarea-example'>Small textarea</InputLabel>
      <TextArea {...args} id='small-textarea-example' size='small' />
    </FormGroup>
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,D,G;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: undefined
  },
  render: args => <FormGroup>
      <InputLabel htmlFor='do-you-use-vcs'>I have a decoration</InputLabel>
      <InputGroup>
        <InputDecoration borderRight>In the form of a text:</InputDecoration>
        <TextArea {...args} id='do-you-use-vcs' rows={5} />
        <InputDecoration>
          <Logo />
        </InputDecoration>
      </InputGroup>
    </FormGroup>
}`,...(G=(D=u.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var L,A,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    defaultValue: 'Content'
  },
  render: args => <FormGroup isDisabled>
      <InputLabel htmlFor='textarea-disabled'>I'm disabled</InputLabel>
      <TextArea id='textarea-disabled' {...args} />
    </FormGroup>
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var S,O,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    defaultValue: 'Content'
  },
  render: args => <FormGroup>
      <InputLabel htmlFor='textarea-readonly'>I'm read-only</InputLabel>
      <TextArea id='textarea-readonly' {...args} />
    </FormGroup>
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Y=["Default","Controlled","Small","Decoration","Disabled","ReadOnly"];export{l as Controlled,u as Decoration,s as Default,c as Disabled,m as ReadOnly,d as Small,Y as __namedExportsOrder,W as default};
