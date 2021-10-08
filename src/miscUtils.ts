const defaultIfConditions = [undefined, null, '']
export function defaultIf(value: any, defaultValue: any, conditions?: any[]) {
  if ((conditions || defaultIfConditions).includes(value)) {
    return defaultValue;
  }
  return value;
}

export function strue(value: any) {
  if (value && value !== '0' && value !== 'false') {
    return true;
  }
  return false;
}

export function jsonClone(value: any) {
  return JSON.parse(JSON.stringify(value));
}
