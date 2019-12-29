export * from './lodash'
export * from './ulid'
export * from './pickDeep'
export { default as slugify } from 'slugify'

const defaultIfConditions = [undefined, null, '']
export function defaultIf(value, defaultValue, conditions) {
    if ((conditions || defaultIfConditions).includes(value)) {
        return defaultValue;
    }
    return value;
}

export function firstDuplicateBy(array, fn) {
    let val, vals = new Set();
    for (let ix = 0; ix < array.length; ix++) {
        val = fn(array[ix], ix);
        if (vals.has(val)) {
            return array[ix];
        }
        vals.add(val);
    }
}
