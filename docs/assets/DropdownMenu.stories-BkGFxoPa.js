import{j as e}from"./jsx-runtime-CKrituN3.js";import{f as S,B as p,e as t,I as o,g as n,h as g,C as x,P as F}from"./Text-f2280Dx2.js";import{t as s}from"./index-BVjCO-_d.js";import{r as J}from"./index-CBqU2yxZ.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";const G={title:"Beta/Dropdown menu",component:S,parameters:{layout:"centered"},tags:["autodocs"]},c={name:"Menu items",args:{trigger:e.jsxs(p,{variant:"tertiary",children:[e.jsx(t,{children:"Settings"}),e.jsx(o,{name:"arrow-down"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{onSelect:()=>{},children:"Team profile"}),e.jsx(n,{onSelect:()=>{},children:"Team members"}),e.jsx(n,{onSelect:()=>{},children:"Apps & Integrations"}),e.jsx(g,{}),e.jsx(n,{onSelect:()=>{},style:{color:s.color.red[700]},children:"Leave team"})]})}},l={name:"Checkbox menu items",args:{trigger:e.jsxs(p,{children:[e.jsx(t,{children:"Choose members"}),e.jsx(o,{name:"arrow-down"})]}),style:{minWidth:200}},render:function(L){const[d,I]=J.useState(new Set),u=(r,H)=>I(A=>{const h=new Set(A);return H?h.add(r):h.delete(r),h}),P=()=>I(new Set);return e.jsxs("div",{style:{display:"flex",gap:s.space.small},children:[e.jsxs(S,{...L,onOpenChange:P,children:[e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(x,{label:"Jack Hudson",checked:d.has("Jack Hudson"),onChange:r=>u("Jack Hudson",r)})}),e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(x,{label:"Katy Cormick",checked:d.has("Katy Cormick"),onChange:r=>u("Katy Cormick",r)})}),e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(x,{label:"Lena Steady",checked:d.has("Lena Steady"),onChange:r=>u("Lena Steady",r)})})]}),e.jsx("div",{children:Array.from(d).map(r=>e.jsx(F,{children:r},r))})]})}},w={display:"flex",gap:s.space.small,alignItems:"center"},m={name:"Icon menu items",args:{trigger:e.jsxs(p,{variant:"secondary",children:[e.jsx(t,{children:"Filter"}),e.jsx(o,{name:"arrow-down"})]}),style:{minWidth:200},children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{style:w,children:[e.jsx(o,{name:"sticky"}),e.jsx(t,{children:"Stickies"})]}),e.jsxs(n,{style:w,children:[e.jsx(o,{name:"shapes"}),e.jsx(t,{children:"Shapes"})]}),e.jsxs(n,{style:w,children:[e.jsx(o,{name:"frames"}),e.jsx(t,{children:"Frames"})]}),e.jsx(g,{}),e.jsx(n,{style:{color:s.color.blue[700]},children:"Clear filter"})]})}},i={name:"Preferred side",args:{trigger:e.jsx(e.Fragment,{}),side:"top",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{onSelect:()=>{},children:"Team profile"}),e.jsx(n,{onSelect:()=>{},children:"Team members"}),e.jsx(n,{onSelect:()=>{},children:"Apps & Integrations"}),e.jsx(g,{}),e.jsx(n,{onSelect:()=>{},style:{color:s.color.red[700]},children:"Leave team"})]})},render:a=>e.jsx(S,{...a,trigger:e.jsxs(p,{children:[e.jsxs(t,{children:["Preferred side: ",a.side]}),e.jsx(o,{name:"arrow-down"})]}),children:a.children})};var M,j,y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Menu items',
  args: {
    trigger: <Button variant='tertiary'>
        <Text>Settings</Text>
        <Icon name='arrow-down' />
      </Button>,
    children: <>
        <DropdownMenuItem onSelect={() => {}}>Team profile</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Team members</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Apps & Integrations</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem onSelect={() => {}} style={{
        color: tokens.color.red[700]
      }}>
          Leave team
        </DropdownMenuItem>
      </>
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,k,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Checkbox menu items',
  args: {
    trigger: <Button>
        <Text>Choose members</Text>
        <Icon name='arrow-down' />
      </Button>,
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
    return <div style={{
      display: 'flex',
      gap: tokens.space.small
    }}>
        <DropdownMenu {...args} onOpenChange={onOpenChangeHandler}>
          <DropdownMenuItem disableCloseOnSelect>
            <Checkbox label='Jack Hudson' checked={selected.has('Jack Hudson')} onChange={value => handleSelect('Jack Hudson', value)} />
          </DropdownMenuItem>
          <DropdownMenuItem disableCloseOnSelect>
            <Checkbox label='Katy Cormick' checked={selected.has('Katy Cormick')} onChange={value => handleSelect('Katy Cormick', value)} />
          </DropdownMenuItem>
          <DropdownMenuItem disableCloseOnSelect>
            <Checkbox label='Lena Steady' checked={selected.has('Lena Steady')} onChange={value => handleSelect('Lena Steady', value)} />
          </DropdownMenuItem>
        </DropdownMenu>
        <div>
          {Array.from(selected).map(name => <Paragraph key={name}>{name}</Paragraph>)}
        </div>
      </div>;
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,f,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Icon menu items',
  args: {
    trigger: <Button variant='secondary'>
        <Text>Filter</Text>
        <Icon name='arrow-down' />
      </Button>,
    style: {
      minWidth: 200
    },
    children: <>
        <DropdownMenuItem style={dropdownMenuItemStyle}>
          <Icon name='sticky' />
          <Text>Stickies</Text>
        </DropdownMenuItem>
        <DropdownMenuItem style={dropdownMenuItemStyle}>
          <Icon name='shapes' />
          <Text>Shapes</Text>
        </DropdownMenuItem>
        <DropdownMenuItem style={dropdownMenuItemStyle}>
          <Icon name='frames' />
          <Text>Frames</Text>
        </DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem style={{
        color: tokens.color.blue[700]
      }}>Clear filter</DropdownMenuItem>
      </>
  }
}`,...(v=(f=m.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,O,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Preferred side',
  args: {
    trigger: <></>,
    side: 'top',
    children: <>
        <DropdownMenuItem onSelect={() => {}}>Team profile</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Team members</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => {}}>Apps & Integrations</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem onSelect={() => {}} style={{
        color: tokens.color.red[700]
      }}>
          Leave team
        </DropdownMenuItem>
      </>
  },
  render: args => <DropdownMenu {...args} trigger={<Button>
          <Text>Preferred side: {args.side}</Text>
          <Icon name='arrow-down' />
        </Button>}>
      {args.children}
    </DropdownMenu>
}`,...(B=(O=i.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const N=["MenuItems","CheckboxMenuItems","IconMenuItems","PreferredSide"];export{l as CheckboxMenuItems,m as IconMenuItems,c as MenuItems,i as PreferredSide,N as __namedExportsOrder,G as default};
