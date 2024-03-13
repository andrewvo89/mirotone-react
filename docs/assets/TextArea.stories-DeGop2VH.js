import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as z}from"./index-CBqU2yxZ.js";import{M as t,F as n,l as o,n as E,o as x}from"./Text-Dde-qTQH.js";import{L as H}from"./Logo-B_Q92Usg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,Y={title:"Components/Text area",component:t,args:{placeholder:"Placeholder text"},argTypes:{size:{defaultValue:{summary:"medium"}},isDisabled:{defaultValue:{summary:!1}},isReadOnly:{defaultValue:{summary:!1}}},parameters:{layout:"centered"},tags:["autodocs"]},s={render:r=>e.jsxs(n,{children:[e.jsx(o,{htmlFor:"textarea-example",children:"Textarea"}),e.jsx(t,{id:"textarea-example",...r})]})},l={args:{value:"Controlled text"},render:function(a){const[,V]=P(),_=c=>{var p;(p=a.onChange)==null||p.call(a,c),V({value:c})};return e.jsxs(n,{children:[e.jsx(o,{htmlFor:"textarea-controlled",children:"TextArea"}),z.createElement(t,{...a,key:a.value,id:"textarea-controlled",onChange:_,value:a.value,defaultValue:a.value})]})}},d={args:{size:"small"},render:r=>e.jsxs(n,{size:"small",children:[e.jsx(o,{htmlFor:"small-textarea-example",children:"Small textarea"}),e.jsx(t,{...r,id:"small-textarea-example",size:"small"})]})},u={args:{placeholder:void 0},render:r=>e.jsxs(n,{children:[e.jsx(o,{htmlFor:"do-you-use-vcs",children:"I have a decoration"}),e.jsxs(E,{children:[e.jsx(x,{borderRight:!0,children:"In the form of a text:"}),e.jsx(t,{...r,id:"do-you-use-vcs",rows:5}),e.jsx(x,{children:e.jsx(H,{})})]})]})},m={args:{isDisabled:!0,defaultValue:"Content"},render:r=>e.jsxs(n,{isDisabled:!0,children:[e.jsx(o,{htmlFor:"textarea-disabled",children:"I'm disabled"}),e.jsx(t,{id:"textarea-disabled",...r})]})},i={name:"Read only",args:{isReadOnly:!0,defaultValue:"Content"},render:r=>e.jsxs(n,{children:[e.jsx(o,{htmlFor:"textarea-readonly",children:"I'm read-only"}),e.jsx(t,{id:"textarea-readonly",...r})]})};var g,h,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='textarea-example'>Textarea</InputLabel>
      <TextArea id='textarea-example' {...args} />
    </FormGroup>
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var b,F,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(F=l.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var y,j,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <FormGroup size='small'>
      <InputLabel htmlFor='small-textarea-example'>Small textarea</InputLabel>
      <TextArea {...args} id='small-textarea-example' size='small' />
    </FormGroup>
}`,...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var C,D,L;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(D=u.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var G,A,T;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    defaultValue: 'Content'
  },
  render: args => <FormGroup isDisabled>
      <InputLabel htmlFor='textarea-disabled'>I'm disabled</InputLabel>
      <TextArea id='textarea-disabled' {...args} />
    </FormGroup>
}`,...(T=(A=m.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var R,S,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Read only',
  args: {
    isReadOnly: true,
    defaultValue: 'Content'
  },
  render: args => <FormGroup>
      <InputLabel htmlFor='textarea-readonly'>I'm read-only</InputLabel>
      <TextArea id='textarea-readonly' {...args} />
    </FormGroup>
}`,...(O=(S=i.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const q=["Default","Controlled","Small","Decoration","Disabled","ReadOnly"];export{l as Controlled,u as Decoration,s as Default,m as Disabled,i as ReadOnly,d as Small,q as __namedExportsOrder,Y as default};
