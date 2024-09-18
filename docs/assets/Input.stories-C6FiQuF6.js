import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{g as n,h as a,i as o,j as G,k as t,l as s,S as ge,m as D,G as je,n as C}from"./Text-CVP924a7.js";import{L as F}from"./Logo-BXDS-_gd.js";import"./index-BBkUAzwr.js";import"./index-BUy04y1F.js";import"./index-PqR-_bA4.js";const{useArgs:fe}=__STORYBOOK_MODULE_PREVIEW_API__,Ce={title:"Components/Input",component:n,argTypes:{size:{defaultValue:{summary:"medium"}},isDisabled:{defaultValue:{summary:!1}},isReadOnly:{defaultValue:{summary:!1}},flexModifier:{defaultValue:{summary:"4/4"}}},args:{placeholder:"Placeholder",type:"text"},parameters:{layout:"centered"},tags:["autodocs"]},c={render:r=>e.jsxs(a,{children:[e.jsx(o,{htmlFor:"example-1",children:"Input Label"}),e.jsx(n,{id:"example-1",...r})]})},u={args:{value:"Controlled text"},render:function(l){const[,Ie]=fe(),be=S=>{var y;(y=l.onChange)==null||y.call(l,S),Ie({value:S})};return e.jsxs(a,{children:[e.jsx(o,{htmlFor:"example-1",children:"Input Label"}),e.jsx(n,{id:"example-1",...l,value:l.value,onChange:be})]})}},p={args:{size:"small"},render:r=>e.jsxs(a,{size:"small",children:[e.jsx(o,{htmlFor:"example-2",children:"Input Label"}),e.jsx(n,{id:"example-2",...r})]})},d={name:"Helper text",render:r=>e.jsxs(a,{children:[e.jsx(o,{htmlFor:"feedback-1",children:"Input Label"}),e.jsx(n,{id:"feedback-1",...r}),e.jsx(G,{children:"This is a helper text"})]})},i={name:"Input feedback",render:r=>e.jsxs(a,{status:"success",children:[e.jsx(o,{htmlFor:"feedback-2",children:"Input Label"}),e.jsx(n,{id:"feedback-2",...r})]})},m={render:r=>e.jsxs(a,{status:"success",children:[e.jsx(o,{htmlFor:"success-1",children:"Input Label"}),e.jsx(n,{id:"success-1",...r}),e.jsx(G,{children:"Saved, good job!"})]})},x={render:r=>e.jsxs(a,{status:"error",children:[e.jsx(o,{htmlFor:"error-1",children:"Input Label"}),e.jsx(n,{id:"error-1",...r}),e.jsx(G,{children:"Oops, something went wrong"})]})},h={args:{isDisabled:!0,value:"Value"},render:r=>e.jsxs(a,{isDisabled:!0,children:[e.jsx(o,{htmlFor:"disabled-1",children:"Input Label"}),e.jsx(n,{id:"disabled-1",...r})]})},I={name:"Read only",args:{isReadOnly:!0,value:"Value"},render:r=>e.jsxs(a,{children:[e.jsx(o,{htmlFor:"readonly-1",children:"Input Label"}),e.jsx(n,{id:"readonly-1",...r})]})},b={args:{type:"number",placeholder:"123456"},render:r=>e.jsxs(a,{children:[e.jsx(o,{htmlFor:"decoration-1",children:"What do you want?"}),e.jsxs(t,{children:[e.jsx(s,{children:"€"}),e.jsx(n,{id:"decoration-1",...r}),e.jsx(s,{children:",-"})]})]})},g={name:"SVG decoration",args:{type:"email",placeholder:"email@address.com"},render:r=>e.jsxs(a,{children:[e.jsx(o,{htmlFor:"email-1",children:"Email address:"}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(F,{})}),e.jsx(n,{id:"email-1",...r})]})]})},j={render:r=>e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(F,{})}),e.jsxs(ge,{autoComplete:"cc-type",children:[e.jsx(D,{value:"master-card",children:"Mastercard"}),e.jsx(D,{value:"american-express",children:"American Express"})]}),e.jsx(n,{...r,flexModifier:"2/4",type:"text",placeholder:"Card number",autoComplete:"cc-number"}),e.jsx(n,{...r,type:"month",placeholder:"Expiration date",autoComplete:"cc-exp"}),e.jsx(n,{...r,flexModifier:"2/4",type:"number",placeholder:"CVC",autoComplete:"cc-csc"}),e.jsx(s,{borderLeft:!0,children:e.jsx(F,{})})]})},f={name:"Decoration border",render:r=>e.jsxs(je,{children:[e.jsx(C,{colStart:1,colEnd:6,children:e.jsxs(t,{children:[e.jsx(s,{borderRight:!0,children:"€"}),e.jsx(n,{...r,type:"number",placeholder:"123456"})]})}),e.jsx(C,{colStart:7,colEnd:12,children:e.jsxs(t,{children:[e.jsx(n,{type:"number",placeholder:"123456"}),e.jsx(s,{borderLeft:!0,children:"€"})]})})]})},L={name:"Flex modifiers",args:{flexModifier:void 0},render:r=>e.jsxs("div",{className:"grid",children:[e.jsxs(t,{className:"cs1 ce6",children:[e.jsx(s,{borderRight:!0,flexModifier:"1/4",children:".one-fourth"}),e.jsx(n,{...r,type:"number",placeholder:"123456"})]}),e.jsxs(t,{className:"cs7 ce12",children:[e.jsx(n,{...r,type:"number",placeholder:"123456"}),e.jsx(s,{borderLeft:!0,flexModifier:"2/4",children:".two-fourth"})]})]})};var v,E,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <FormGroup>
      <InputLabel htmlFor='example-1'>Input Label</InputLabel>
      <Input id='example-1' {...args} />
    </FormGroup>
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var M,R,k;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <InputLabel htmlFor='example-1'>Input Label</InputLabel>
        <Input id='example-1' {...args} value={args.value} onChange={onChangeHandler} />
      </FormGroup>;
  }
}`,...(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var T,V,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <FormGroup size='small'>
      <InputLabel htmlFor='example-2'>Input Label</InputLabel>
      <Input id='example-2' {...args} />
    </FormGroup>
}`,...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var _,w,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Helper text',
  render: args => <FormGroup>
      <InputLabel htmlFor='feedback-1'>Input Label</InputLabel>
      <Input id='feedback-1' {...args} />
      <InputStatusText>This is a helper text</InputStatusText>
    </FormGroup>
}`,...(H=(w=d.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var N,z,B;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Input feedback',
  render: args => <FormGroup status='success'>
      <InputLabel htmlFor='feedback-2'>Input Label</InputLabel>
      <Input id='feedback-2' {...args} />
    </FormGroup>
}`,...(B=(z=i.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,W,K;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <FormGroup status='success'>
      <InputLabel htmlFor='success-1'>Input Label</InputLabel>
      <Input id='success-1' {...args} />
      <InputStatusText>Saved, good job!</InputStatusText>
    </FormGroup>
}`,...(K=(W=m.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var U,Y,q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <FormGroup status='error'>
      <InputLabel htmlFor='error-1'>Input Label</InputLabel>
      <Input id='error-1' {...args} />
      <InputStatusText>Oops, something went wrong</InputStatusText>
    </FormGroup>
}`,...(q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    value: 'Value'
  },
  render: args => <FormGroup isDisabled>
      <InputLabel htmlFor='disabled-1'>Input Label</InputLabel>
      <Input id='disabled-1' {...args} />
    </FormGroup>
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Read only',
  args: {
    isReadOnly: true,
    value: 'Value'
  },
  render: args => <FormGroup>
      <InputLabel htmlFor='readonly-1'>Input Label</InputLabel>
      <Input id='readonly-1' {...args} />
    </FormGroup>
}`,...(ee=($=I.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,ae;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,te;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'SVG decoration',
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
}`,...(te=(se=g.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ce,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <InputGroup>
      <InputDecoration>
        <Logo />
      </InputDecoration>
      <Select autoComplete='cc-type'>
        <SelectOption value='master-card'>Mastercard</SelectOption>
        <SelectOption value='american-express'>American Express</SelectOption>
      </Select>
      <Input {...args} flexModifier='2/4' type='text' placeholder='Card number' autoComplete='cc-number' />
      <Input {...args} type='month' placeholder='Expiration date' autoComplete='cc-exp' />
      <Input {...args} flexModifier='2/4' type='number' placeholder='CVC' autoComplete='cc-csc' />
      <InputDecoration borderLeft>
        <Logo />
      </InputDecoration>
    </InputGroup>
}`,...(ue=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,de,ie;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Decoration border',
  render: args => <Grid>
      <GridItem colStart={1} colEnd={6}>
        <InputGroup>
          <InputDecoration borderRight>&euro;</InputDecoration>
          <Input {...args} type='number' placeholder='123456' />
        </InputGroup>
      </GridItem>
      <GridItem colStart={7} colEnd={12}>
        <InputGroup>
          <Input type='number' placeholder='123456' />
          <InputDecoration borderLeft>&euro;</InputDecoration>
        </InputGroup>
      </GridItem>
    </Grid>
}`,...(ie=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var me,xe,he;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Flex modifiers',
  args: {
    flexModifier: undefined
  },
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
}`,...(he=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const ve=["Default","Controlled","Small","HelperText","InputFeedback","Success","Error","Disabled","ReadOnly","Decoration","SvgDecoration","Group","DecorationBorder","FlexModifiers"];export{u as Controlled,b as Decoration,f as DecorationBorder,c as Default,h as Disabled,x as Error,L as FlexModifiers,j as Group,d as HelperText,i as InputFeedback,I as ReadOnly,p as Small,m as Success,g as SvgDecoration,ve as __namedExportsOrder,Ce as default};
