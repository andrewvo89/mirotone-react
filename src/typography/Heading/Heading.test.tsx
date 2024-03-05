import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { render } from '@testing-library/react';

import { Heading } from '../../';

describe('Heading', () => {
  test('should render a heading with the correct level and class name', () => {
    const { getByText } = render(<Heading level={1}>Hello, World!</Heading>);
    const heading = getByText('Hello, World!');

    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveClass('h1');
  });
  test('should render a heading level 2 with the correct class name', () => {
    const { getByText } = render(<Heading level={2}>Hello, World!</Heading>);
    const heading = getByText('Hello, World!');

    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass('h2');
  });

  test('should render a heading level 3 with the correct class name', () => {
    const { getByText } = render(<Heading level={3}>Hello, World!</Heading>);
    const heading = getByText('Hello, World!');

    expect(heading.tagName).toBe('H3');
    expect(heading).toHaveClass('h3');
  });

  test('should render a heading level 4 with the correct class name', () => {
    const { getByText } = render(<Heading level={4}>Hello, World!</Heading>);
    const heading = getByText('Hello, World!');

    expect(heading.tagName).toBe('H4');
    expect(heading).toHaveClass('h4');
  });

  test('should render a heading with a custom class name', () => {
    const { getByText } = render(
      <Heading level={2} className='custom-heading'>
        Hello, World!
      </Heading>,
    );
    const heading = getByText('Hello, World!');
    expect(heading).toHaveClass('custom-heading');
  });

  test('should pass down a ref', () => {
    const ref = createRef<HTMLHeadingElement>();
    const { getByText } = render(
      <Heading level={3} ref={ref}>
        Hello, World!
      </Heading>,
    );
    const heading = getByText('Hello, World!');
    expect(heading).toBe(ref.current);
  });
});
