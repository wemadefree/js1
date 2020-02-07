const defaultIfConditions = [undefined, null, '']
export function defaultIf(value, defaultValue, conditions) {
    if ((conditions || defaultIfConditions).includes(value)) {
        return defaultValue;
    }
    return value;
}

export function strue(value) {
    if (value && value !== '0' && value !== 'false') {
        return true;
    }
    return false;
}
