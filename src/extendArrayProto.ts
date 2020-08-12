import { upperFirst } from './lodash'
import * as arrayHelpersRaw from './array'

const arrayHelpers: any = arrayHelpersRaw;

export function extendArrayProto(proto?: any) {
  if (!proto) {
    proto = Array.prototype;
  }
  for (let fnKey of Object.keys(arrayHelpers)) {
    const protoKey = `js1${upperFirst(fnKey)}`;
    if (proto[protoKey]) {
      continue;
    }
    const fn = arrayHelpers[fnKey];
    Object.defineProperty(proto, protoKey, {
      writable: true,
      enumerable: false,
      configurable: true,
      value: function (...args: any[]) {
        return fn(this, ...args);
      }
    })
  }
}
