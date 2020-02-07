import { groupBy } from './lodash'

export * from './flattenBy'
export * from './lodashArray'

let fdbv, fdbi, fdbs = new Set();
export function firstDuplicateBy(array, fn, defaultValue) {
    fdbs.clear();
    for (fdbi = 0; fdbi < array.length; fdbi++) {
        fdbv = fn(array[fdbi], fdbi);
        if (fdbs.has(fdbv)) {
            return array[fdbi];
        }
        fdbs.add(fdbv);
    }
    return defaultValue;
}

export function groupByValues(collection, iteratee) {
    return Object.values(groupBy(collection, iteratee));
}

let gbkv, gbko, gbki;
export function groupByKeyVal(collection, iteratee) {
    gbkv = groupBy(collection, iteratee);
    gbko = Object.keys(gbkv);
    for (gbki = 0; gbki < gbko.length; gbki++) {
        gbko[gbki] = {
            key: gbko[gbki],
            values: gbkv[gbko[gbki]]
        }
    }
    return gbko;
}
