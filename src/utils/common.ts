/**
 * Check if the value is a string
 * @export
 * @param {unknown} value
 * @return {*}  {value is string}
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
