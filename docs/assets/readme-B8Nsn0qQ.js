import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as s}from"./index-DsW6s9Wh.js";import{useMDXComponents as t}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DhUCEFUB.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./extends-CCbyfPlC.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function o(r){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code"},t(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Mirotone React"}),`
`,e.jsx(n.h1,{id:"mirotone-react",children:"Mirotone React"}),`
`,e.jsxs(n.p,{children:["Mirotone React is a component library for the Mirotone Design System, offering a range of components and utilities to speed up development for Miro. It draws inspiration from ",e.jsx(n.a,{href:"https://www.mirotone.xyz/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mirotone CSS"})," and ",e.jsx(n.a,{href:"https://www.figma.com/community/file/1125698230201231315/mirotone-ui-components",target:"_blank",rel:"nofollow noopener noreferrer",children:"Miro UI Components"}),"."]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#links",children:"Links"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#installation",children:"Installation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tokens",children:"Tokens"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#roadmap",children:"Roadmap"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#versions",children:"Versions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#license",children:"License"})}),`
`]}),`
`,e.jsx(n.h2,{id:"links",children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/mirotone-react",target:"_blank",rel:"nofollow noopener noreferrer",children:"NPM package"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/andrewvo89/mirotone-react",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub repository"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://andrewvo89.github.io/mirotone-react",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.mirotone.xyz/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mirotone CSS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/community/file/1125698230201231315/mirotone-ui-components",target:"_blank",rel:"nofollow noopener noreferrer",children:"Miro UI Components"})}),`
`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"Install the package as a dependency on your own project by running:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install mirotone-react
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add mirotone-react
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add mirotone-react
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"All components and types are exported from the main package. You can import them as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, ButtonProps, Input, InputProps, tokens } from 'mirotone-react';
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
`})}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(n.p,{children:`Mirotone React provides a type safe way to access the tokens from Mirotone CSS.
Tokens include color, typography, space, borderRadius.
All tokens are exported from the main package. You can import them as follows:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { tokens } from 'mirotone-react';
`})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Path"}),e.jsx("th",{children:"Documentation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Color"}),e.jsx("td",{children:e.jsx(n.code,{children:"tokens.color"})}),e.jsx("td",{children:e.jsx(n.a,{href:"?path=/docs/tokens-colors--docs",children:"Color docs"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Typography"}),e.jsx("td",{children:e.jsx(n.code,{children:"tokens.typography"})}),e.jsx("td",{children:e.jsx(n.a,{href:"?path=/docs/tokens-typography--docs",children:"Typography docs"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Spacing"}),e.jsx("td",{children:e.jsx(n.code,{children:"tokens.space"})}),e.jsx("td",{children:e.jsx(n.a,{href:"?path=/docs/tokens-spacing--docs",children:"Spacing docs"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Border radius"}),e.jsx("td",{children:e.jsx(n.code,{children:"tokens.borderRadius"})}),e.jsx("td",{children:e.jsx(n.a,{href:"?path=/docs/tokens-border-radius--docs",children:"Border radius docs"})})]})]})]}),`
`,e.jsx(n.h2,{id:"roadmap",children:"Roadmap"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Reference"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"App footer"}),e.jsx("td",{children:"Planned"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15152&mode=design&t=lya7mgGuGGuYILSD-4",target:"_blank",rel:"nofollow noopener noreferrer",children:`Figma
design`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"App header"}),e.jsx("td",{children:"Planned"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15175&mode=design&t=M6wFp57pRdq4g6Te-4",target:"_blank",rel:"nofollow noopener noreferrer",children:`Figma
design`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"App nav"}),e.jsx("td",{children:"Planned"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15189&mode=design&t=M6wFp57pRdq4g6Te-4",target:"_blank",rel:"nofollow noopener noreferrer",children:`Figma
design`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dismissable badge"}),e.jsx("td",{children:"Planned"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-13487&mode=design&t=lya7mgGuGGuYILSD-4",target:"_blank",rel:"nofollow noopener noreferrer",children:`Figma
design`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dropdown "}),e.jsx("td",{children:"Beta"}),e.jsx("td",{children:e.jsx(n.a,{href:"?path=/docs/beta-dropdown--docs",children:"Docs"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tooltip"}),e.jsx("td",{children:"Planned"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-13308&mode=design&t=v8b8OhxAH4M1Erx0-4",target:"_blank",rel:"nofollow noopener noreferrer",children:`Figma
design`})})})]})]})]}),`
`,e.jsx(n.h2,{id:"versions",children:"Versions"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Mirotone React"}),e.jsx("th",{children:"Mirotone CSS"}),e.jsx("th",{children:"Mirotone UI Components"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"1.x.x"}),e.jsx("td",{children:"5.1.1"}),e.jsx("td",{children:"1.4"})]})})]}),`
`,e.jsx(n.h2,{id:"license",children:"License"}),`
`,e.jsxs(n.p,{children:["Mirotone React is distributed under MIT license, Copyright (c) 2024 Andrew Vo-Nguyen. See ",e.jsx(n.a,{href:"https://github.com/andrewvo89/mirotone-react/blob/main/LICENSE",target:"_blank",rel:"nofollow noopener noreferrer",children:"LICENSE"})," for more information."]})]})}function g(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{g as default};
