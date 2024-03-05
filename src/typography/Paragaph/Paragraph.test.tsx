import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { Paragraph } from '../../';

describe('Paragraph', () => {
  test('should render a paragraph', () => {
    const { getByText } = render(<Paragraph>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph.tagName).toBe('P');
    expect(paragraph).toBeInTheDocument();
  });

  test('should render a paragraph of size small', () => {
    const { getByText } = render(<Paragraph size='small'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveClass('p-small');
  });

  test('should render a paragraph of size medium', () => {
    const { getByText } = render(<Paragraph>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveClass('p-medium');
  });

  test('should render a paragraph of size large', () => {
    const { getByText } = render(<Paragraph size='large'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveClass('p-large');
  });

  test('should render a paragraph with a custom class name', () => {
    const { getByText } = render(<Paragraph className='custom-class'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveClass('custom-class');
  });

  test('should pass down a ref', () => {
    const ref = createRef<HTMLParagraphElement>();
    const { container } = render(<Paragraph ref={ref}>Hello, World!</Paragraph>);
    const paragraph = container.querySelector('p');
    expect(paragraph).toBe(ref.current);
  });
});
