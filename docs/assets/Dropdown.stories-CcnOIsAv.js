import{j as e}from"./jsx-runtime-CKrituN3.js";import{g as x,h as i,i as n,j as u,t as o,C as h,P as F,I as S,e as g}from"./Text-Dde-qTQH.js";import{r as J}from"./index-CBqU2yxZ.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";const z={title:"Beta/Dropdown",component:x,parameters:{layout:"centered"},tags:["autodocs"]},a={name:"Dropdown items",args:{trigger:e.jsx(i,{variant:"tertiary",children:"Settings"}),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{onSelect:()=>{},children:"Team profile"}),e.jsx(n,{onSelect:()=>{},children:"Team members"}),e.jsx(n,{onSelect:()=>{},children:"Apps & Integrations"}),e.jsx(u,{}),e.jsx(n,{onSelect:()=>{},style:{color:o.color.red[700]},children:"Leave team"})]})}},d={name:"Checkbox items",args:{trigger:e.jsx(i,{children:"Choose members"}),style:{minWidth:200}},render:function(M){const[s,D]=J.useState(new Set),m=(r,H)=>D(A=>{const p=new Set(A);return H?p.add(r):p.delete(r),p}),P=()=>D(new Set);return e.jsxs("div",{style:{display:"flex",gap:o.space.small},children:[e.jsxs(x,{...M,onOpenChange:P,children:[e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(h,{label:"Jack Hudson",checked:s.has("Jack Hudson"),onChange:r=>m("Jack Hudson",r)})}),e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(h,{label:"Katy Cormick",checked:s.has("Katy Cormick"),onChange:r=>m("Katy Cormick",r)})}),e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(h,{label:"Lena Steady",checked:s.has("Lena Steady"),onChange:r=>m("Lena Steady",r)})})]}),e.jsx("div",{children:Array.from(s).map(r=>e.jsx(F,{children:r},r))})]})}},w={display:"flex",gap:o.space.small,alignItems:"center"},l={name:"Icon items",args:{trigger:e.jsx(i,{variant:"secondary",children:"Filter"}),style:{minWidth:200},children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{style:w,children:[e.jsx(S,{name:"sticky"}),e.jsx(g,{children:"Stickies"})]}),e.jsxs(n,{style:w,children:[e.jsx(S,{name:"shapes"}),e.jsx(g,{children:"Shapes"})]}),e.jsxs(n,{style:w,children:[e.jsx(S,{name:"frames"}),e.jsx(g,{children:"Frames"})]}),e.jsx(u,{}),e.jsx(n,{style:{color:o.color.blue[700]},children:"Clear filter"})]})}},c={name:"Preferred side",args:{trigger:e.jsx(e.Fragment,{}),side:"top",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{onSelect:()=>{},children:"Team profile"}),e.jsx(n,{onSelect:()=>{},children:"Team members"}),e.jsx(n,{onSelect:()=>{},children:"Apps & Integrations"}),e.jsx(u,{}),e.jsx(n,{onSelect:()=>{},style:{color:o.color.red[700]},children:"Leave team"})]})},render:t=>e.jsx(x,{...t,trigger:e.jsxs(i,{children:["Preferred side: ",t.side]}),children:t.children})};var I,y,j;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Dropdown items',
  args: {
    trigger: <DropdownButton variant='tertiary'>Settings</DropdownButton>,
    children: <>
        <DropdownItem onSelect={() => {}}>Team profile</DropdownItem>
        <DropdownItem onSelect={() => {}}>Team members</DropdownItem>
        <DropdownItem onSelect={() => {}}>Apps & Integrations</DropdownItem>
        <DropdownDivider />
        <DropdownItem onSelect={() => {}} style={{
        color: tokens.color.red[700]
      }}>
          Leave team
        </DropdownItem>
      </>
  }
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var k,C,b;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Checkbox items',
  args: {
    trigger: <DropdownButton>Choose members</DropdownButton>,
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
        <Dropdown {...args} onOpenChange={onOpenChangeHandler}>
          <DropdownItem disableCloseOnSelect>
            <Checkbox label='Jack Hudson' checked={selected.has('Jack Hudson')} onChange={value => handleSelect('Jack Hudson', value)} />
          </DropdownItem>
          <DropdownItem disableCloseOnSelect>
            <Checkbox label='Katy Cormick' checked={selected.has('Katy Cormick')} onChange={value => handleSelect('Katy Cormick', value)} />
          </DropdownItem>
          <DropdownItem disableCloseOnSelect>
            <Checkbox label='Lena Steady' checked={selected.has('Lena Steady')} onChange={value => handleSelect('Lena Steady', value)} />
          </DropdownItem>
        </Dropdown>
        <div>
          {Array.from(selected).map(name => <Paragraph key={name}>{name}</Paragraph>)}
        </div>
      </div>;
  }
}`,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,v,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Icon items',
  args: {
    trigger: <DropdownButton variant='secondary'>Filter</DropdownButton>,
    style: {
      minWidth: 200
    },
    children: <>
        <DropdownItem style={dropdownMenuItemStyle}>
          <Icon name='sticky' />
          <Text>Stickies</Text>
        </DropdownItem>
        <DropdownItem style={dropdownMenuItemStyle}>
          <Icon name='shapes' />
          <Text>Shapes</Text>
        </DropdownItem>
        <DropdownItem style={dropdownMenuItemStyle}>
          <Icon name='frames' />
          <Text>Frames</Text>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem style={{
        color: tokens.color.blue[700]
      }}>Clear filter</DropdownItem>
      </>
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var O,B,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Preferred side',
  args: {
    trigger: <></>,
    side: 'top',
    children: <>
        <DropdownItem onSelect={() => {}}>Team profile</DropdownItem>
        <DropdownItem onSelect={() => {}}>Team members</DropdownItem>
        <DropdownItem onSelect={() => {}}>Apps & Integrations</DropdownItem>
        <DropdownDivider />
        <DropdownItem onSelect={() => {}} style={{
        color: tokens.color.red[700]
      }}>
          Leave team
        </DropdownItem>
      </>
  },
  render: args => <Dropdown {...args} trigger={<DropdownButton>Preferred side: {args.side}</DropdownButton>}>
      {args.children}
    </Dropdown>
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const G=["MenuItems","CheckboxMenuItems","IconMenuItems","PreferredSide"];export{d as CheckboxMenuItems,l as IconMenuItems,a as MenuItems,c as PreferredSide,G as __namedExportsOrder,z as default};
