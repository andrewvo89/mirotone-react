import{e as n,j as e,F as s,f as o,g as G,h as t,i as a}from"./TagButton-oil9SWFj.js";import{t as Ie}from"./index-BTVOhaqX.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:be}=__STORYBOOK_MODULE_PREVIEW_API__;function f(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("circle",{r:"12",cx:"12",cy:"12",fill:Ie.colors.indigo[700]})})}const fe={title:"Components/Input",component:n,args:{placeholder:"Placeholder",size:"medium",type:"text"},parameters:{layout:"centered"},tags:["autodocs"]},l={render:r=>e.jsxs(s,{children:[e.jsx(o,{htmlFor:"example-1",children:"Input Label"}),e.jsx(n,{id:"example-1",...r})]})},p={args:{value:"Controlled text"},render:function(c){const[,xe]=be(),he=D=>{var y;(y=c.onChange)==null||y.call(c,D),xe({value:D})};return e.jsxs(s,{children:[e.jsx(o,{htmlFor:"example-1",children:"Input Label"}),e.jsx(n,{id:"example-1",...c,value:c.value,onChange:he})]})}},u={args:{size:"small"},render:r=>e.jsxs(s,{size:"small",children:[e.jsx(o,{htmlFor:"example-2",children:"Input Label"}),e.jsx(n,{id:"example-2",...r})]})},d={render:r=>e.jsxs(s,{children:[e.jsx(o,{htmlFor:"feedback-1",children:"Input Label"}),e.jsx(n,{id:"feedback-1",...r}),e.jsx(G,{children:"This is a helper text"})]})},i={render:r=>e.jsxs(s,{status:"success",children:[e.jsx(o,{htmlFor:"feedback-2",children:"Input Label"}),e.jsx(n,{id:"feedback-2",...r})]})},m={render:r=>e.jsxs(s,{status:"success",children:[e.jsx(o,{htmlFor:"success-1",children:"Input Label"}),e.jsx(n,{id:"success-1",...r}),e.jsx(G,{children:"Saved, good job!"})]})},x={render:r=>e.jsxs(s,{status:"error",children:[e.jsx(o,{htmlFor:"error-1",children:"Input Label"}),e.jsx(n,{id:"error-1",...r}),e.jsx(G,{children:"Oops, something went wrong"})]})},h={args:{isDisabled:!0,value:"Value"},render:r=>e.jsxs(s,{isDisabled:!0,children:[e.jsx(o,{htmlFor:"disabled-1",children:"Input Label"}),e.jsx(n,{id:"disabled-1",...r})]})},I={args:{isReadOnly:!0,value:"Value"},render:r=>e.jsxs(s,{children:[e.jsx(o,{htmlFor:"readonly-1",children:"Input Label"}),e.jsx(n,{id:"readonly-1",...r})]})},b={args:{type:"number",placeholder:"123456"},render:r=>e.jsxs(s,{children:[e.jsx(o,{htmlFor:"decoration-1",children:"What do you want?"}),e.jsxs(t,{children:[e.jsx(a,{children:"€"}),e.jsx(n,{id:"decoration-1",...r}),e.jsx(a,{children:",-"})]})]})},g={args:{type:"email",placeholder:"email@address.com"},render:r=>e.jsxs(s,{children:[e.jsx(o,{htmlFor:"email-1",children:"Email address:"}),e.jsxs(t,{children:[e.jsx(a,{children:e.jsx(f,{})}),e.jsx(n,{id:"email-1",...r})]})]})},j={render:r=>e.jsxs(t,{children:[e.jsx(a,{children:e.jsx(f,{})}),e.jsxs("select",{className:"select one-fourth",autoComplete:"cc-type",children:[e.jsx("option",{value:"",children:"Mastercard"}),e.jsx("option",{value:"",children:"American Express"})]}),e.jsx(n,{...r,flexModifier:"2/4",type:"text",placeholder:"Card number",autoComplete:"cc-number"}),e.jsx(n,{...r,type:"month",placeholder:"Expiration date",autoComplete:"cc-exp"}),e.jsx(n,{...r,flexModifier:"2/4",type:"number",placeholder:"CVC",autoComplete:"cc-csc"}),e.jsx(a,{borderLeft:!0,children:e.jsx(f,{})})]})},L={render:r=>e.jsxs("div",{className:"grid",children:[e.jsxs(t,{className:"cs1 ce6",children:[e.jsx(a,{borderRight:!0,children:"€"}),e.jsx(n,{...r,type:"number",placeholder:"123456"})]}),e.jsxs(t,{className:"cs7 ce12",children:[e.jsx(n,{type:"number",placeholder:"123456"}),e.jsx(a,{borderLeft:!0,children:"€"})]})]})},F={render:r=>e.jsxs("div",{className:"grid",children:[e.jsxs(t,{className:"cs1 ce6",children:[e.jsx(a,{borderRight:!0,flexModifier:"1/4",children:".one-fourth"}),e.jsx(n,{...r,type:"number",placeholder:"123456"})]}),e.jsxs(t,{className:"cs7 ce12",children:[e.jsx(n,{...r,type:"number",placeholder:"123456"}),e.jsx(a,{borderLeft:!0,flexModifier:"2/4",children:".two-fourth"})]})]})};var S,v,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='example-1'>Input Label</InputLabel>
      <Input id='example-1' {...args} />
    </FormGroup>
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var N,w,E;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'Controlled text'
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
        <InputLabel htmlFor='example-1'>Input Label</InputLabel>
        <Input id='example-1' {...args} value={args.value} onChange={onChange} />
      </FormGroup>;
  }
}`,...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,T,k;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <FormGroup size='small'>
      <InputLabel htmlFor='example-2'>Input Label</InputLabel>
      <Input id='example-2' {...args} />
    </FormGroup>
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var O,R,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='feedback-1'>Input Label</InputLabel>
      <Input id='feedback-1' {...args} />
      <InputStatusText>This is a helper text</InputStatusText>
    </FormGroup>
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var _,V,z;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <FormGroup status='success'>
      <InputLabel htmlFor='feedback-2'>Input Label</InputLabel>
      <Input id='feedback-2' {...args} />
    </FormGroup>
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,P,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <FormGroup status='success'>
      <InputLabel htmlFor='success-1'>Input Label</InputLabel>
      <Input id='success-1' {...args} />
      <InputStatusText>Saved, good job!</InputStatusText>
    </FormGroup>
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var H,K,U;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <FormGroup status='error'>
      <InputLabel htmlFor='error-1'>Input Label</InputLabel>
      <Input id='error-1' {...args} />
      <InputStatusText>Oops, something went wrong</InputStatusText>
    </FormGroup>
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,q,J;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    value: 'Value'
  },
  render: args => <FormGroup isDisabled>
      <InputLabel htmlFor='disabled-1'>Input Label</InputLabel>
      <Input id='disabled-1' {...args} />
    </FormGroup>
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Z;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'Value'
  },
  render: args => <FormGroup>
      <InputLabel htmlFor='readonly-1'>Input Label</InputLabel>
      <Input id='readonly-1' {...args} />
    </FormGroup>
}`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '123456'
  },
  render: args => <FormGroup>
      <InputLabel htmlFor='decoration-1'>What do you want?</InputLabel>
      <InputGroup>
        <InputDecoration>€</InputDecoration>
        <Input id='decoration-1' {...args} />
        <InputDecoration>,-</InputDecoration>
      </InputGroup>
    </FormGroup>
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,se,oe;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'email@address.com'
  },
  render: args => <FormGroup>
      <InputLabel htmlFor='email-1'>Email address:</InputLabel>
      <InputGroup>
        <InputDecoration>
          <Logo />
        </InputDecoration>
        <Input id='email-1' {...args} />
      </InputGroup>
    </FormGroup>
}`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ae,te,ce;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <InputGroup>
      <InputDecoration>
        <Logo />
      </InputDecoration>
      <select className='select one-fourth' autoComplete='cc-type'>
        <option value=''>Mastercard</option>
        <option value=''>American Express</option>
      </select>
      <Input {...args} flexModifier='2/4' type='text' placeholder='Card number' autoComplete='cc-number' />
      <Input {...args} type='month' placeholder='Expiration date' autoComplete='cc-exp' />
      <Input {...args} flexModifier='2/4' type='number' placeholder='CVC' autoComplete='cc-csc' />
      <InputDecoration borderLeft>
        <Logo />
      </InputDecoration>
    </InputGroup>
}`,...(ce=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};var le,pe,ue;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <div className='grid'>
      <InputGroup className='cs1 ce6'>
        <InputDecoration borderRight>&euro;</InputDecoration>
        <Input {...args} type='number' placeholder='123456' />
      </InputGroup>
      <InputGroup className='cs7 ce12'>
        <Input type='number' placeholder='123456' />
        <InputDecoration borderLeft>&euro;</InputDecoration>
      </InputGroup>
    </div>
}`,...(ue=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,ie,me;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <div className='grid'>
      <InputGroup className='cs1 ce6'>
        <InputDecoration borderRight flexModifier='1/4'>
          .one-fourth
        </InputDecoration>
        <Input {...args} type='number' placeholder='123456' />
      </InputGroup>
      <InputGroup className='cs7 ce12'>
        <Input {...args} type='number' placeholder='123456' />
        <InputDecoration borderLeft flexModifier='2/4'>
          .two-fourth
        </InputDecoration>
      </InputGroup>
    </div>
}`,...(me=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};const Ge=["Default","Controlled","Small","HelperText","InputFeedback","Success","Error","Disabled","ReadOnly","Decoration","SvgDecoration","Group","DecorationBorder","FlexModifiers"];export{p as Controlled,b as Decoration,L as DecorationBorder,l as Default,h as Disabled,x as Error,F as FlexModifiers,j as Group,d as HelperText,i as InputFeedback,I as ReadOnly,u as Small,m as Success,g as SvgDecoration,Ge as __namedExportsOrder,fe as default};
