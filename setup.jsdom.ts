import '@testing-library/jest-dom/vitest';

// https://stackoverflow.com/a/75757070
const originalConsoleError = console.error;
console.error = function (...data) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  if (typeof data[0]?.toString === 'function' && data[0].toString().includes('Error: Could not parse CSS stylesheet'))
    return;
  originalConsoleError(...data);
};
