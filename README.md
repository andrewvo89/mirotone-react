# Getting started

Mirotone React is a component library for the Mirotone Design System. It provides a set of components and utilities to help you build faster for Miro. It is loosely based off [Mirotone CSS](https://www.mirotone.xyz/) and [Miro UI Components](https://www.figma.com/community/file/1125698230201231315/mirotone-ui-components).

## Documentation

For API docs and usage examples, visit the [Mirotone React](https://andrewvo89.github.io/mirotone-react/) documentation page.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Tokens](#components)
- [Roadmap](#roadmap)
- [Versions](#versions)
- [License](#license)

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
| Space         | `tokens.space`        | [Space docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/tokens-spacing--docs)               |
| Border radius | `tokens.borderRadius` | [Border radius docs](https://andrewvo89.github.io/mirotone-react/?path=/docs/tokens-border-radius--docs) |

## Roadmap

| Feature           | Status  | Reference                                                                                                                                                              |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App footer        | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15152&mode=design&t=lya7mgGuGGuYILSD-4>) |
| App header        | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15175&mode=design&t=M6wFp57pRdq4g6Te-4>) |
| App nav           | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-15189&mode=design&t=M6wFp57pRdq4g6Te-4>) |
| Dismissable badge | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-13487&mode=design&t=lya7mgGuGGuYILSD-4>) |
| Dropdown button   | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-13529&mode=design&t=lya7mgGuGGuYILSD-4>) |
| Icon button       | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-13902&mode=design&t=lya7mgGuGGuYILSD-4>) |
| Icon text button  | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-13693&mode=design&t=lya7mgGuGGuYILSD-4>) |
| Tooltip           | Planned | [Figma design](<https://www.figma.com/file/BI4RtvvajB7E3EQHlNTL4I/Mirotone-UI-Components-(Community)?type=design&node-id=3642-13308&mode=design&t=v8b8OhxAH4M1Erx0-4>) |

## Versions

| Mirotone React | Mirotone CSS | Mirotone UI Components |
| -------------- | ------------ | ---------------------- |
| 1.0.0          | 5.1.1        | 1.4                    |

## License

Mirotone React is distributed under MIT license, Copyright (c) 2024 Andrew Vo-Nguyen. See [LICENSE](https://github.com/andrewvo89/mirotone-react/blob/main/LICENSE) for more information.
