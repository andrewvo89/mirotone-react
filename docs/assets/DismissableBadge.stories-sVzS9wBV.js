import{j as t}from"./index-CfptBk_o.js";import{D}from"./Text-w2RWykAU.js";import{r as I}from"./index-D4H_InIO.js";import"./index-vYCkCKEW.js";const T={title:"Beta/Dismissable badge",component:D,argTypes:{rounded:{defaultValue:{summary:!1}},variant:{defaultValue:{summary:"primary"}}},args:{children:"User Mapping"},parameters:{layout:"centered"},tags:["autodocs"]},e={},s={args:{variant:"primary"}},r={args:{variant:"secondary"}},a={args:{rounded:!0}},o={name:"Close action",render:function(j){const[A,n]=I.useState(!1),B=()=>{n(!0),setTimeout(()=>{n(!1)},1e3)};return t.jsx("div",{style:{display:A?"none":"block"},children:t.jsx(D,{...j,onClose:B,children:"User Mapping"})})}};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,b,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Close action',
  render: function App(args) {
    const [isClosed, setIsClosed] = useState(false);
    const onCloseHandler = () => {
      setIsClosed(true);
      setTimeout(() => {
        setIsClosed(false);
      }, 1000);
    };
    return <div style={{
      display: isClosed ? 'none' : 'block'
    }}>
        <DismissableBadge {...args} onClose={onCloseHandler}>
          User Mapping
        </DismissableBadge>
      </div>;
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const U=["Default","Primary","Secondary","Rounded","CloseAction"];export{o as CloseAction,e as Default,s as Primary,a as Rounded,r as Secondary,U as __namedExportsOrder,T as default};
