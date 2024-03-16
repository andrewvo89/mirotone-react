import{j as e}from"./jsx-runtime-CKrituN3.js";import{a as S,b as r,c as M,t as o,d as w,C as I,F as u,I as j,T as x,B as J}from"./Text-1nIFvCIj.js";import{r as z}from"./index-CBqU2yxZ.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";const{useArgs:W}=__STORYBOOK_MODULE_PREVIEW_API__,G={title:"Beta/Dropdown",component:S,argTypes:{size:{defaultValue:{summary:"medium"}}},args:{trigger:e.jsx(e.Fragment,{}),children:e.jsxs(e.Fragment,{children:[e.jsx(r,{onSelect:()=>{},children:"Team profile"}),e.jsx(r,{onSelect:()=>{},children:"Team members"}),e.jsx(r,{onSelect:()=>{},children:"Apps & Integrations"}),e.jsx(M,{}),e.jsx(r,{onSelect:()=>{},style:{color:o.color.red[700]},children:"Leave team"})]})},parameters:{layout:"centered"},tags:["autodocs"]},i={name:"Dropdown items",args:{trigger:e.jsx(w,{variant:"tertiary",children:"Settings"})}},p={name:"Checkbox items",args:{style:{minWidth:200}},render:function(l){const[s,t]=z.useState(new Set),c=(n,d)=>t(E=>{const D=new Set(E);return d?D.add(n):D.delete(n),D}),C=()=>t(new Set);return e.jsxs(S,{...l,trigger:e.jsxs(w,{children:["Choose members",`${s.size>0?` (${s.size})`:""}`]}),onOpenChange:C,children:[e.jsx(r,{disableCloseOnSelect:!0,children:e.jsx(I,{label:"Jack Hudson",checked:s.has("Jack Hudson"),onChange:n=>c("Jack Hudson",n)})}),e.jsx(r,{disableCloseOnSelect:!0,children:e.jsx(I,{label:"Katy Cormick",checked:s.has("Katy Cormick"),onChange:n=>c("Katy Cormick",n)})}),e.jsx(r,{disableCloseOnSelect:!0,children:e.jsx(I,{label:"Lena Steady",checked:s.has("Lena Steady"),onChange:n=>c("Lena Steady",n)})})]})}},m={name:"Icon items",args:{trigger:e.jsx(w,{variant:"secondary",children:"Filter"}),style:{minWidth:200},children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(u,{gap:o.space.small,alignItems:"center",children:[e.jsx(j,{name:"sticky"}),e.jsx(x,{children:"Stickies"})]})}),e.jsx(r,{children:e.jsxs(u,{gap:o.space.small,alignItems:"center",children:[e.jsx(j,{name:"shapes"}),e.jsx(x,{children:"Shapes"})]})}),e.jsx(r,{children:e.jsxs(u,{gap:o.space.small,alignItems:"center",children:[e.jsx(j,{name:"frames"}),e.jsx(x,{children:"Frames"})]})}),e.jsx(M,{}),e.jsx(r,{style:{color:o.color.blue[700]},children:"Clear filter"})]})}},g={name:"Preferred side",args:{side:"top"},render:a=>e.jsx(S,{...a,trigger:e.jsxs(w,{children:["Preferred side: ",a.side]}),children:a.children})},h={args:{open:!1,trigger:e.jsx(x,{children:"Dropdown trigger is over here"})},render:function(l){const{open:s,onOpenChange:t,...c}=l,[,C]=W(),n=d=>{t==null||t(d),C({open:d})};return e.jsxs(u,{gap:o.space.small,alignItems:"center",children:[e.jsx(J,{onClick:()=>n(!s),children:"Toggle dropdown manually"}),e.jsx(S,{...c,onOpenChange:n,open:s,children:l.children})]})}};var k,y,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Dropdown items',
  args: {
    trigger: <DropdownButton variant='tertiary'>Settings</DropdownButton>
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,O,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Checkbox items',
  args: {
    style: {
      minWidth: 200
    }
  },
  render: function App(args) {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const handleSelect = (name: string, selected: boolean) => setSelected(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (selected) {
        newSelected.add(name);
      } else {
        newSelected.delete(name);
      }
      return newSelected;
    });
    const onOpenChangeHandler = () => setSelected(new Set());
    return <Dropdown {...args} trigger={<DropdownButton>Choose members{\`\${selected.size > 0 ? \` (\${selected.size})\` : ''}\`}</DropdownButton>} onOpenChange={onOpenChangeHandler}>
        <DropdownItem disableCloseOnSelect>
          <Checkbox label='Jack Hudson' checked={selected.has('Jack Hudson')} onChange={value => handleSelect('Jack Hudson', value)} />
        </DropdownItem>
        <DropdownItem disableCloseOnSelect>
          <Checkbox label='Katy Cormick' checked={selected.has('Katy Cormick')} onChange={value => handleSelect('Katy Cormick', value)} />
        </DropdownItem>
        <DropdownItem disableCloseOnSelect>
          <Checkbox label='Lena Steady' checked={selected.has('Lena Steady')} onChange={value => handleSelect('Lena Steady', value)} />
        </DropdownItem>
      </Dropdown>;
  }
}`,...(v=(O=p.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var F,T,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Icon items',
  args: {
    trigger: <DropdownButton variant='secondary'>Filter</DropdownButton>,
    style: {
      minWidth: 200
    },
    children: <>
        <DropdownItem>
          <Flex gap={tokens.space.small} alignItems='center'>
            <Icon name='sticky' />
            <Text>Stickies</Text>
          </Flex>
        </DropdownItem>
        <DropdownItem>
          <Flex gap={tokens.space.small} alignItems='center'>
            <Icon name='shapes' />
            <Text>Shapes</Text>
          </Flex>
        </DropdownItem>
        <DropdownItem>
          <Flex gap={tokens.space.small} alignItems='center'>
            <Icon name='frames' />
            <Text>Frames</Text>
          </Flex>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem style={{
        color: tokens.color.blue[700]
      }}>Clear filter</DropdownItem>
      </>
  }
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var H,A,_;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Preferred side',
  args: {
    side: 'top'
  },
  render: args => <Dropdown {...args} trigger={<DropdownButton>Preferred side: {args.side}</DropdownButton>}>
      {args.children}
    </Dropdown>
}`,...(_=(A=g.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var L,P,K;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    open: false,
    trigger: <Text>Dropdown trigger is over here</Text>
  },
  render: function App(args) {
    const {
      open,
      onOpenChange,
      ...rest
    } = args;
    const [, setArgs] = useArgs();
    const onOpenChangeHandler = (open: boolean) => {
      onOpenChange?.(open);
      setArgs({
        open
      });
    };
    return <Flex gap={tokens.space.small} alignItems='center'>
        <Button onClick={() => onOpenChangeHandler(!open)}>Toggle dropdown manually</Button>
        <Dropdown {...rest} onOpenChange={onOpenChangeHandler} open={open}>
          {args.children}
        </Dropdown>
      </Flex>;
  }
}`,...(K=(P=h.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};const N=["MenuItems","CheckboxMenuItems","IconMenuItems","PreferredSide","Controlled"];export{p as CheckboxMenuItems,h as Controlled,m as IconMenuItems,i as MenuItems,g as PreferredSide,N as __namedExportsOrder,G as default};
