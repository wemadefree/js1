import getPath from 'lodash/get'
import setPath from 'lodash/set'
import cloneDeep from 'lodash/cloneDeep'

export function pickDeepInto(target: any, obj: any, paths: string[], defaultValue?: any, defaultsPerKey?: any): any {
  let hasDefaultValue = typeof defaultValue !== 'undefined';
  let hasDefaultsPerKey = typeof defaultsPerKey === 'object';
  let hasDefaults = hasDefaultValue || hasDefaultsPerKey;
  if (!target) {
    target = {};
  }
  if (!obj) {
    obj = {}
  }
  for (let p of paths) {
    let val = getPath(obj, p);
    if (hasDefaults) {
      if (hasDefaultsPerKey && val === void 0) {
        val = getPath(defaultsPerKey, p);
      }
      if (hasDefaultValue && val === void 0) {
        val = defaultValue;
      }
    }
    if (val !== void 0) {
      setPath(target, p, val);
    }
  }
  return target;
}

export function pickDeepIntoClone(target: any, obj: any, paths: string[], defaultValue?: any, defaultsPerKey?: any): any {
  target = target ? cloneDeep(target) : {};
  obj = obj ? cloneDeep(obj) : {};
  return pickDeepInto(target, obj, paths, defaultValue, defaultsPerKey)
}

export function pickDeep(obj: any, paths: string[], defaultValue?: any, defaultsPerKey?: any): any {
  return pickDeepInto({}, obj, paths, defaultValue, defaultsPerKey);
}

export function pickDeepClone(obj: any, paths: string[], defaultValue?: any, defaultsPerKey?: any): any {
  obj = obj ? cloneDeep(obj) : {};
  return pickDeep(obj, paths, defaultValue, defaultsPerKey);
}
