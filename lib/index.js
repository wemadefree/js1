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
