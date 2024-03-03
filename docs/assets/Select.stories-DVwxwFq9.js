import{S as o,j as e,F as r,l as a,m as t,h as _,i as I}from"./TagButton-oil9SWFj.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,z={title:"Components/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s={render:n=>e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-default",children:"What do you want?"}),e.jsxs(o,{...n,id:"select-default",children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})},c={args:{value:"1"},argTypes:{value:{control:"inline-radio",options:["1","2","3","4"]}},render:function(l){const[,C]=A(),W=d=>{var O;(O=l.onChange)==null||O.call(l,d),C({value:d})};return e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-controlled",children:"What do you want?"}),e.jsxs(o,{...l,id:"select-controlled",value:l.value,onChange:W,children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})}},i={render:n=>e.jsxs(r,{size:"small",children:[e.jsx(a,{htmlFor:"select-small",children:"What do you want?"}),e.jsxs(o,{...n,id:"select-small",size:"small",children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})},u={render:n=>e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-decoration",children:"Do you use a VCS?"}),e.jsxs(_,{children:[e.jsx(I,{children:"Yes:"}),e.jsxs(o,{...n,id:"select-decoration",children:[e.jsx(t,{value:"github",children:"GitHub"}),e.jsx(t,{value:"gitlab",children:"GitLab"}),e.jsx(t,{value:"bitbucket",children:"BitBucket"})]})]})]})},p={render:n=>e.jsxs(r,{children:[e.jsx(a,{htmlFor:"select-disabled",children:"What do you want?"}),e.jsxs(o,{...n,id:"select-disabled",isDisabled:!0,children:[e.jsx(t,{value:"1",children:"Option one"}),e.jsx(t,{value:"2",children:"Option two"}),e.jsx(t,{value:"3",children:"Option three"}),e.jsx(t,{value:"4",children:"Option four"})]})]})};var S,h,m;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <SelectLabel htmlFor='select-default'>What do you want?</SelectLabel>
      <Select {...args} id='select-default'>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var v,x,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    const onChange = (value: string) => {
      args.onChange?.(value);
      setArgs({
        value
      });
    };
    return <FormGroup>
        <SelectLabel htmlFor='select-controlled'>What do you want?</SelectLabel>
        <Select {...args} id='select-controlled' value={args.value} onChange={onChange}>
          <SelectOption value='1'>Option one</SelectOption>
          <SelectOption value='2'>Option two</SelectOption>
          <SelectOption value='3'>Option three</SelectOption>
          <SelectOption value='4'>Option four</SelectOption>
        </Select>
      </FormGroup>;
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <FormGroup size='small'>
      <SelectLabel htmlFor='select-small'>What do you want?</SelectLabel>
      <Select {...args} id='select-small' size='small'>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
}`,...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var f,G,w;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <SelectLabel htmlFor='select-decoration'>Do you use a VCS?</SelectLabel>
      <InputGroup>
        <InputDecoration>Yes:</InputDecoration>
        <Select {...args} id='select-decoration'>
          <SelectOption value='github'>GitHub</SelectOption>
          <SelectOption value='gitlab'>GitLab</SelectOption>
          <SelectOption value='bitbucket'>BitBucket</SelectOption>
        </Select>
      </InputGroup>
    </FormGroup>
}`,...(w=(G=u.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var D,L,y;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <SelectLabel htmlFor='select-disabled'>What do you want?</SelectLabel>
      <Select {...args} id='select-disabled' isDisabled>
        <SelectOption value='1'>Option one</SelectOption>
        <SelectOption value='2'>Option two</SelectOption>
        <SelectOption value='3'>Option three</SelectOption>
        <SelectOption value='4'>Option four</SelectOption>
      </Select>
    </FormGroup>
}`,...(y=(L=p.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const R=["Default","Controlled","Small","Decoration","Disabled"];export{c as Controlled,u as Decoration,s as Default,p as Disabled,i as Small,R as __namedExportsOrder,z as default};
