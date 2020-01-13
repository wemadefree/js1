import { getPath } from './lodash'

function flattenByScanner(array, parent, root, fn, output, itemAndParent) {
    if (array) {
        let target, index = 0;
        for (let item of array) {
            output.push(item);
            target = fn(item, index++, array, parent, root);
            flattenByScanner(target, item, root, fn, output);
        }
    }
}

export function flattenBy(arrayOrObject, fn) {
    let root = arrayOrObject;
    if (typeof fn === 'string') {
        let path = fn;
        fn = function (item) {
            return getPath(item, path);
        }
    }
    if (!Array.isArray(arrayOrObject)) {
        arrayOrObject = [arrayOrObject];
    }
    let output = [];
    flattenByScanner(arrayOrObject, root, root, fn, output);
    return output;
}
