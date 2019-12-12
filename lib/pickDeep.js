import { getPath, setPath, cloneDeep } from './lodash'

export function pickDeepInto(target, obj, paths, defaultValue, defaultsPerKey) {
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

export function pickDeepIntoClone(target, obj, paths, defaultValue, defaultsPerKey) {
    target = target ? cloneDeep(target) : {};
    obj = obj ? cloneDeep(obj) : {};
    return pickDeepInto(target, obj, paths, defaultValue, defaultsPerKey)
}

export function pickDeep(obj, paths, defaultValue, defaultsPerKey) {
    return pickDeepInto({}, obj, paths, defaultValue, defaultsPerKey);
}

export function pickDeepClone(obj, paths, defaultValue, defaultsPerKey) {
    obj = obj ? cloneDeep(obj) : {};
    return pickDeep(obj, paths, defaultValue, defaultsPerKey);
}
