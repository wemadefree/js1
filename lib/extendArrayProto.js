import { upperFirst } from './lodash'
import * as arrayHelpers from './array'

export function extendArrayProto(proto) {
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
            value: function () {
                return fn(this, ...arguments);
            }
        })
    }
}
