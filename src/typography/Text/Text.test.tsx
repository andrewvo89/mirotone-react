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
    expect(text).toHaveClass('p-small');
  });

  test('should render a text of size medium', () => {
    const { getByText } = render(<Text>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveClass('p-medium');
  });

  test('should render a text of size large', () => {
    const { getByText } = render(<Text size='large'>Hello, World!</Text>);
    const text = getByText('Hello, World!');
    expect(text).toHaveClass('p-large');
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
