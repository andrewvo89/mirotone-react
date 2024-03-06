import{j as n}from"./jsx-runtime-CKrituN3.js";import{M as s}from"./index-D_j-9SHe.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C4F5-gfB.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function o(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.p,{children:"Mirotone React is a React component library for the Mirotone Design System. It provides a set of components and utilities to help you build your application for Miro."}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#installation",children:"Installation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#usage",children:"Usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#contributing",children:"Contributing"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#license",children:"License"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#versions",children:"Versions"})}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"Install the package as a dependency on your own project by running:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install mirotone-react
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add mirotone-react
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"All components and types are exported from the main package. You can import them as follows:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, ButtonProps, Input, InputProps, tokens } from 'mirotone-react';
import { useCallback, useRef, useState } from 'react';

const buttonProps: ButtonProps = {
  size: 'large',
  variant: 'danger',
};

const inputProps: InputProps = {
  size: 'small',
};

function App() {
  const [value, setValue] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const buttonClickHandler = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <Input
        {...inputProps}
        ref={inputRef}
        value={value}
        onChange={setValue}
        style={{ color: tokens.color.red[800] }}
      />
      <Button
        {...buttonProps}
        ref={buttonRef}
        style={{ borderRadius: tokens.borderRadius.small }}
        onClick={buttonClickHandler}
      >
        Click to focus input
      </Button>
    </>
  );
}

export default App;
`})})]})}function j(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{j as default};
