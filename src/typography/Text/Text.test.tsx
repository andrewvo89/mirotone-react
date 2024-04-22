import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { Text } from '../..';

describe('Text', () => {
  test('should render a text', () => {
    const { getByText } = render(<Text>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text.tagName).toBe('SPAN');
    expect(text).toBeInTheDocument();
  });

  test('should render a text of size small', () => {
    const { getByText } = render(<Text size='small'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-size: var(--font-size-small)');
  });

  test('should render a text of size medium', () => {
    const { getByText } = render(<Text>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-size: var(--font-size-medium)');
  });

  test('should render a text of size large', () => {
    const { getByText } = render(<Text size='large'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-size: var(--font-size-large)');
  });

  test('should render a text of size xlarge', () => {
    const { getByText } = render(<Text size='xlarge'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-size: var(--font-size-xlarge)');
  });

  test('should render a text of size xxlarge', () => {
    const { getByText } = render(<Text size='xxlarge'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-size: var(--font-size-xxlarge)');
  });

  test('should render a text of size xxxlarge', () => {
    const { getByText } = render(<Text size='xxxlarge'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-size: var(--font-size-xxxlarge)');
  });

  test('should render a text with normal weight', () => {
    const { getByText } = render(<Text fontWeight='var(--font-weight-normal)'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-normal)');
  });

  test('should render a text with medium weight', () => {
    const { getByText } = render(<Text fontWeight='var(--font-weight-medium)'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-medium)');
  });

  test('should render a text with bold weight', () => {
    const { getByText } = render(<Text fontWeight='var(--font-weight-bold)'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-bold)');
  });

  test('should render a text with black weight', () => {
    const { getByText } = render(<Text fontWeight='var(--font-weight-black)'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-black)');
  });

  test('should render a text with a custom color', () => {
    const { getByText } = render(<Text fontColor='var(--red900)'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-color: var(--red900)');
  });

  test('should render a text with a custom class name', () => {
    const { getByText } = render(<Text className='custom-class'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveClass('custom-class');
  });

  test('should pass down a ref', () => {
    const ref = createRef<HTMLParagraphElement>();
    const { getByText } = render(<Text ref={ref}>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toBe(ref.current);
  });
});
