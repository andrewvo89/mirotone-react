import{j as e}from"./jsx-runtime-CKrituN3.js";import{f as D,B as l,e as r,I as o,g as n,h as g,C as m}from"./Text-BF-Dc1dU.js";import{t as i}from"./index-BVjCO-_d.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const v={title:"Beta/Dropdown menu",component:D,parameters:{layout:"centered"},tags:["autodocs"]},t={name:"Menu items",args:{trigger:e.jsxs(l,{variant:"tertiary",children:[e.jsx(r,{children:"Settings"}),e.jsx(o,{name:"arrow-down"})]}),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Team profile"}),e.jsx(n,{children:"Team members"}),e.jsx(n,{children:"Apps & Integrations"}),e.jsx(g,{}),e.jsx(n,{style:{color:i.color.red[700]},children:"Leave team"})]})}},s={name:"Checkbox menu items",args:{trigger:e.jsxs(l,{children:[e.jsx(r,{children:"Choose members"}),e.jsx(o,{name:"arrow-down"})]}),style:{minWidth:200},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(m,{label:"Jack Hudson"})}),e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(m,{label:"Katy Cormick"})}),e.jsx(n,{disableCloseOnSelect:!0,children:e.jsx(m,{label:"Lena Steady"})})]})}},d={display:"flex",gap:i.space.small,alignItems:"center"},a={name:"Icon menu items",args:{trigger:e.jsxs(l,{variant:"secondary",children:[e.jsx(r,{children:"Filter"}),e.jsx(o,{name:"arrow-down"})]}),style:{minWidth:200},children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{style:d,children:[e.jsx(o,{name:"sticky"}),e.jsx(r,{children:"Stickies"})]}),e.jsxs(n,{style:d,children:[e.jsx(o,{name:"shapes"}),e.jsx(r,{children:"Shapes"})]}),e.jsxs(n,{style:d,children:[e.jsx(o,{name:"frames"}),e.jsx(r,{children:"Frames"})]}),e.jsx(g,{}),e.jsx(n,{style:{color:i.color.blue[700]},children:"Clear filter"})]})}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Menu items',
  args: {
    trigger: <Button variant='tertiary'>
        <Text>Settings</Text>
        <Icon name='arrow-down' />
      </Button>,
    children: <>
        <DropdownMenuItem>Team profile</DropdownMenuItem>
        <DropdownMenuItem>Team members</DropdownMenuItem>
        <DropdownMenuItem>Apps & Integrations</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem style={{
        color: tokens.color.red[700]
      }}>Leave team</DropdownMenuItem>
      </>
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,h,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Checkbox menu items',
  args: {
    trigger: <Button>
        <Text>Choose members</Text>
        <Icon name='arrow-down' />
      </Button>,
    style: {
      minWidth: 200
    },
    children: <>
        <DropdownMenuItem disableCloseOnSelect>
          <Checkbox label='Jack Hudson' />
        </DropdownMenuItem>
        <DropdownMenuItem disableCloseOnSelect>
          <Checkbox label='Katy Cormick' />
        </DropdownMenuItem>
        <DropdownMenuItem disableCloseOnSelect>
          <Checkbox label='Lena Steady' />
        </DropdownMenuItem>
      </>
  }
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var w,M,j;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(M=a.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const B=["MenuItems","CheckboxMenuItems","IconMenuItems"];export{s as CheckboxMenuItems,a as IconMenuItems,t as MenuItems,B as __namedExportsOrder,v as default};
