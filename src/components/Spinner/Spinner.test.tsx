import { createRef } from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render } from '@testing-library/react';

import { Spinner } from '../../';

describe.only('Spinner', () => {
  afterEach(cleanup);

  test('should render a spinner', () => {
    const { queryByRole } = render(<Spinner />);
    const spinner = queryByRole('progressbar');
    expect(spinner).not.toBeNull();
  });

  test.only('should render a small spinner', () => {
    const { getByRole } = render(<Spinner size='small' />);
    const spinner = getByRole('progressbar');
    expect(spinner).toHaveClass('spinner-small');
  });

  test('should render a spinner with custom color', () => {
    const { getByRole } = render(<Spinner spinnerColor={'var(--yellow700)'} />);
    const spinner = getByRole('progressbar');
    expect(spinner).toHaveStyle({ '--spinner-color': 'var(--yellow700)' });
  });

  test('should render a spinner with custom class name', () => {
    const customClassName = 'custom-spinner';
    const { getByRole } = render(<Spinner className={customClassName} />);
    const spinner = getByRole('progressbar');
    expect(spinner).toHaveClass(customClassName);
  });

  test('should pass ref to the spinner element', () => {
    const ref = createRef<SVGSVGElement>();
    const { getByRole } = render(<Spinner ref={ref} />);
    const spinner = getByRole('progressbar');
    expect(spinner).toBe(ref.current);
  });
});
