import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as o,h as r,i as a,m as t,k as W,l as _}from"./Text-CR0FbxZk.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,T={title:"Components/Select",component:o,argTypes:{size:{defaultValue:{summary:"medium"}},isDisabled:{defaultValue:{summary:!1}}},parameters:{layout:"centered"},tags:["autodocs"]},s={render:n=>e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-default",children:"What do you want?"}),e.jsxs(o,{...n,id:"select-default",children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})},i={args:{value:"1"},argTypes:{value:{control:"inline-radio",options:["1","2","3","4"]}},render:function(l){const[,C]=A(),L=d=>{var O;(O=l.onChange)==null||O.call(l,d),C({value:d})};return e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-controlled",children:"What do you want?"}),e.jsxs(o,{...l,id:"select-controlled",value:l.value,onChange:L,children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})}},c={render:n=>e.jsxs(r,{size:"small",children:[e.jsx(a,{htmlFor:"select-small",children:"What do you want?"}),e.jsxs(o,{...n,id:"select-small",size:"small",children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})},u={render:n=>e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-decoration",children:"Do you use a VCS?"}),e.jsxs(W,{children:[e.jsx(_,{children:"Yes:"}),e.jsxs(o,{...n,id:"select-decoration",children:[e.jsx(t,{value:"github",children:"GitHub"}),e.jsx(t,{value:"gitlab",children:"GitLab"}),e.jsx(t,{value:"bitbucket",children:"BitBucket"})]})]})]})},p={render:n=>e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-disabled",children:"What do you want?"}),e.jsxs(o,{...n,id:"select-disabled",isDisabled:!0,children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})};var m,h,S;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='select-default'>What do you want?</InputLabel>
      <Select {...args} id='select-default'>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var v,x,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: '1'
  },
  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['1', '2', '3', '4']
    }
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
        <InputLabel htmlFor='select-controlled'>What do you want?</InputLabel>
        <Select {...args} id='select-controlled' value={args.value} onChange={onChangeHandler}>
          <SelectOption value='1'>Option one</SelectOption>
          <SelectOption value='2'>Option two</SelectOption>
          <SelectOption value='3'>Option three</SelectOption>
          <SelectOption value='4'>Option four</SelectOption>
        </Select>
      </FormGroup>;
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,b,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <FormGroup size='small'>
      <InputLabel htmlFor='select-small'>What do you want?</InputLabel>
      <Select {...args} id='select-small' size='small'>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var F,I,G;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='select-decoration'>Do you use a VCS?</InputLabel>
      <InputGroup>
        <InputDecoration>Yes:</InputDecoration>
        <Select {...args} id='select-decoration'>
          <SelectOption value='github'>GitHub</SelectOption>
          <SelectOption value='gitlab'>GitLab</SelectOption>
          <SelectOption value='bitbucket'>BitBucket</SelectOption>
        </Select>
      </InputGroup>
    </FormGroup>
}`,...(G=(I=u.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var w,y,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='select-disabled'>What do you want?</InputLabel>
      <Select {...args} id='select-disabled' isDisabled>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
}`,...(D=(y=p.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const R=["Default","Controlled","Small","Decoration","Disabled"];export{i as Controlled,u as Decoration,s as Default,p as Disabled,c as Small,R as __namedExportsOrder,T as default};
