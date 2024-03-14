<p align="center">
  <a href="https://nextjs.org">
      <img src="https://andrewvo89.github.io/mirotone-react/mirotone-logo.png" height="128px">
  </a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-blue)](https://github.com/andrewvo89/mirotone-react)
[![NPM Version](https://img.shields.io/npm/v/mirotone-react)](https://www.npmjs.com/package/mirotone-react)
[![Coverage](https://img.shields.io/badge/coverage-100%25-blue)](https://github.com/andrewvo89/mirotone-react/blob/fb1297c03d5b42bb497139f56fc1ffd7d7030dc7/package.json#L16)
[![GitHub Issues](https://img.shields.io/github/issues/andrewvo89/mirotone-react?color=blue)](https://github.com/andrewvo89/mirotone-react/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/andrewvo89/mirotone-react?color=blue)](https://github.com/andrewvo89/mirotone-react/pulls)
[![License](https://img.shields.io/github/license/andrewvo89/mirotone-react?color=blue)](/LICENSE)

</div>
<br/>

# Mirotone React

Mirotone React is a component library for the Mirotone Design System, offering a range of components and utilities to speed up development for Miro. It draws inspiration from [Mirotone CSS](https://www.mirotone.xyz/) and [Miro UI Components](https://www.figma.com/community/file/1125698230201231315/mirotone-ui-components).

## Documentation

For API docs and usage examples, visit the [Mirotone React](https://andrewvo89.github.io/mirotone-react) documentation page.

## Table of contents

- [Links](#links)
- [Installation](#installation)
- [Usage](#usage)
- [Tokens](#tokens)
- [Roadmap](#roadmap)
- [Versions](#versions)
- [License](#license)

## Links

- [NPM package](https://www.npmjs.com/package/mirotone-react)
- [GitHub repository](https://github.com/andrewvo89/mirotone-react)
- [Documentation](https://andrewvo89.github.io/mirotone-react)
- [Mirotone CSS](https://www.mirotone.xyz/)
- [Miro UI components](https://www.figma.com/community/file/1125698230201231315/mirotone-ui-components)

## Installation

Install the package as a dependency on your own project by running:

```bash
npm install mirotone-react
```

```bash
yarn add mirotone-react
```

```bash
pnpm add mirotone-react
```

## Usage

All components and types are exported from the main package. You can import them as follows:

```tsx
import { Button, ButtonProps, Input, InputProps, tokens } from 'mirotone-react';
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
```

## Tokens

Mirotone React provides a type safe way to access the tokens from Mirotone CSS.
Tokens include color, typography, space, borderRadius.
All tokens are exported from the main package. You can import them as follows:

```tsx
import { tokens } from 'mirotone-react';
```

| Token         | Path                  | Documentation                                                                                            |
| ------------- | --------------------- | -------------------------------------------------------------------------------------------------------- |
| Color         | `tokens.color`        | [Color docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/tokens-colors--docs)                |
| Typography    | `tokens.typography`   | [Typography docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/tokens-typography--docs)       |
| Spacing       | `tokens.space`        | [Spacing docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/tokens-spacing--docs)             |
| Border radius | `tokens.borderRadius` | [Border radius docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/tokens-border-radius--docs) |

## Roadmap

| Feature           | Status  | Reference                                                                                                                                                              |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App footer        | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15152&mode=design&t=lya7mgGuGGuYILSD-4>) |
| App header        | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15175&mode=design&t=M6wFp57pRdq4g6Te-4>) |
| App nav           | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15189&mode=design&t=M6wFp57pRdq4g6Te-4>) |
| Dismissable badge | Beta    | [Docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/beta-dismissable-badge--docs)                                                                           |
| Dropdown          | Beta    | [Docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/beta-dropdown--docs)                                                                                    |
| Tooltip           | Beta    | [Docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/beta-tooltip--docs)                                                                                     |

## Versions

| Mirotone React | Mirotone CSS | Mirotone UI Components |
| -------------- | ------------ | ---------------------- |
| 1.x.x          | 5.1.1        | 1.4                    |

## License

Mirotone React is distributed under MIT license, Copyright (c) 2024 Andrew Vo-Nguyen. See [LICENSE](/LICENSE) for more information.
