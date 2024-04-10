import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as o}from"./index-z5U8iC57.js";import{M as t}from"./index-B0Ssq39-.js";import"./index-BBkUAzwr.js";import"./iframe-BA6DTzJb.js";import"../sb-preview/runtime.js";import"./index-PqR-_bA4.js";import"./index-BUy04y1F.js";import"./index-B_J8iUie.js";import"./index-DboEQVPH.js";import"./index-DrFu-skq.js";function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Mirotone React"}),`
`,n.jsx(e.h1,{id:"mirotone-react",children:"Mirotone React"}),`
`,n.jsxs(e.p,{children:["Mirotone React is a component library for the Mirotone Design System, offering a range of components and utilities to speed up development for Miro. It draws inspiration from ",n.jsx(e.a,{href:"https://www.mirotone.xyz/",rel:"nofollow",children:"Mirotone CSS"})," and ",n.jsx(e.a,{href:"https://www.figma.com/community/file/1125698230201231315/mirotone-ui-components",rel:"nofollow",children:"Miro UI Components"}),"."]}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#links",children:"Links"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#installation",children:"Installation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#usage",children:"Usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#tokens",children:"Tokens"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#roadmap",children:"Roadmap"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#versions",children:"Versions"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#license",children:"License"})}),`
`]}),`
`,n.jsx(e.h2,{id:"links",children:"Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/mirotone-react",rel:"nofollow",children:"NPM package"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/andrewvo89/mirotone-react",rel:"nofollow",children:"GitHub repository"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://andrewvo89.github.io/mirotone-react",rel:"nofollow",children:"Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.mirotone.xyz/",rel:"nofollow",children:"Mirotone CSS"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.figma.com/community/file/1125698230201231315/mirotone-ui-components",rel:"nofollow",children:"Miro UI components"})}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"Install the package as a dependency on your own project by running:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install mirotone-react
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add mirotone-react
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`pnpm add mirotone-react
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
`})}),`
`,n.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,n.jsx(e.p,{children:`Mirotone React provides a type safe way to access the tokens from Mirotone CSS.
Tokens include color, typography, space, borderRadius.
All tokens are exported from the main package. You can import them as follows:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { tokens } from 'mirotone-react';
`})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Token"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Documentation"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Color"}),n.jsx("td",{children:n.jsx(e.code,{children:"tokens.color"})}),n.jsx("td",{children:n.jsx(e.a,{href:"/docs/tokens-colors--docs",children:"Color docs"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Typography"}),n.jsx("td",{children:n.jsx(e.code,{children:"tokens.typography"})}),n.jsx("td",{children:n.jsx(e.a,{href:"/docs/tokens-typography--docs",children:"Typography docs"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Spacing"}),n.jsx("td",{children:n.jsx(e.code,{children:"tokens.space"})}),n.jsx("td",{children:n.jsx(e.a,{href:"/docs/tokens-spacing--docs",children:"Spacing docs"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Border radius"}),n.jsx("td",{children:n.jsx(e.code,{children:"tokens.borderRadius"})}),n.jsx("td",{children:n.jsx(e.a,{href:"/docs/tokens-border-radius--docs",children:"Border radius docs"})})]})]})]}),`
`,n.jsx(e.h2,{id:"roadmap",children:"Roadmap"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Feature"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Reference"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"Dismissable badge"}),n.jsx("td",{children:"Beta"}),n.jsx("td",{children:n.jsx(e.a,{href:"/docs/beta-dismissable-badge--docs",children:"Docs"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Dropdown "}),n.jsx("td",{children:"Beta"}),n.jsx("td",{children:n.jsx(e.a,{href:"/docs/beta-dropdown--docs",children:"Docs"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"Tooltip"}),n.jsx("td",{children:"Beta"}),n.jsx("td",{children:n.jsx(e.a,{href:"/docs/beta-tooltip--docs",children:"Docs"})})]})]})]}),`
`,n.jsx(e.h2,{id:"versions",children:"Versions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Mirotone React"}),n.jsx("th",{children:"Mirotone CSS"}),n.jsx("th",{children:"Mirotone UI Components"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"1.x.x"}),n.jsx("td",{children:"5.1.1"}),n.jsx("td",{children:"1.4"})]})})]}),`
`,n.jsx(e.h2,{id:"license",children:"License"}),`
`,n.jsxs(e.p,{children:["Mirotone React is distributed under MIT license, Copyright (c) 2024 Andrew Vo-Nguyen. See ",n.jsx(e.a,{href:"https://github.com/andrewvo89/mirotone-react/blob/main/LICENSE",rel:"nofollow",children:"LICENSE"})," for more information."]})]})}function f(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{f as default};
