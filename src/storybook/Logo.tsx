import { tokens } from '../';

export function Logo() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='app-card--app-logo'>
      <circle r='12' cx='12' cy='12' fill={tokens.color.indigo[700]}></circle>
    </svg>
  );
}
