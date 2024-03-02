import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import InputStatusText from './InputStatusText';

describe('InputStatusText', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
    const { getByText, container } = render(<InputStatusText>Test Text</InputStatusText>);
    expect(getByText('Test Text')).toBeInTheDocument();
    const inputStatusText = container.querySelector('.status-text');
    expect(inputStatusText).not.toBeNull();
  });

  test('should pass down custom class name', () => {
    const { container } = render(<InputStatusText className='custom-class' />);
    const inputStatusText = container.querySelector('.status-text');
    expect(inputStatusText).toHaveClass('custom-class');
  });

  test('should pass down ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<InputStatusText ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
