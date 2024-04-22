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
    console.log(paragraph.style);
    expect(paragraph).toHaveStyle('--font-size: var(--font-size-small)');
  });

  test('should render a paragraph of size medium', () => {
    const { getByText } = render(<Paragraph>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveStyle('--font-size: var(--font-size-medium)');
  });

  test('should render a paragraph of size large', () => {
    const { getByText } = render(<Paragraph size='large'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveStyle('--font-size: var(--font-size-large)');
  });

  test('should render a paragraph of size xlarge', () => {
    const { getByText } = render(<Paragraph size='xlarge'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveStyle('--font-size: var(--font-size-xlarge)');
  });

  test('should render a paragraph of size xxlarge', () => {
    const { getByText } = render(<Paragraph size='xxlarge'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveStyle('--font-size: var(--font-size-xxlarge)');
  });

  test('should render a paragraph of size xxxlarge', () => {
    const { getByText } = render(<Paragraph size='xxxlarge'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveStyle('--font-size: var(--font-size-xxxlarge)');
  });

  test('should render a text with normal weight', () => {
    const { getByText } = render(<Paragraph fontWeight='var(--font-weight-normal)'>Hello, World!</Paragraph>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-normal)');
  });

  test('should render a text with medium weight', () => {
    const { getByText } = render(<Paragraph fontWeight='var(--font-weight-medium)'>Hello, World!</Paragraph>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-medium)');
  });

  test('should render a text with bold weight', () => {
    const { getByText } = render(<Paragraph fontWeight='var(--font-weight-bold)'>Hello, World!</Paragraph>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-bold)');
  });

  test('should render a text with black weight', () => {
    const { getByText } = render(<Paragraph fontWeight='var(--font-weight-black)'>Hello, World!</Paragraph>);
    const text = getByText('Hello, World!');
    expect(text).toHaveStyle('--font-weight: var(--font-weight-black)');
  });

  test('should render a paragraph with a custom color', () => {
    const { getByText } = render(<Paragraph fontColor='var(--red900)'>Hello, World!</Paragraph>);
    const paragraph = getByText('Hello, World!');
    expect(paragraph).toHaveStyle('--font-color: var(--red900)');
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
