import groupBy from 'lodash/groupBy'

let fdbv: any, fdbi: number, fdbs = new Set();
export function firstDuplicateBy<T>(array: T[], fn: (r: T, ix: number) => any, defaultValue?: T): T | undefined {
  for (fdbi = 0; fdbi < array.length; fdbi++) {
    fdbv = fn(array[fdbi], fdbi);
    if (fdbs.has(fdbv)) {
      fdbs.clear();
      return array[fdbi];
    }
    fdbs.add(fdbv);
  }
  fdbs.clear();
  return defaultValue;
}

export function groupByValues(collection: any, iteratee: (r: any) => any): any {
  return Object.values(groupBy(collection, iteratee));
}

let gbkv: any, gbko: any[], gbki: number;
export function groupByKeyVal(collection: any, iteratee: (r: any) => any) {
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

export function toggleArray<T>(array: T[], state: boolean, value: any): T[] {
  if (!Array.isArray(array)) {
    throw new Error('toggleArray: first argument must be an array');
  }
  if (state) {
    if (!array.includes(value)) {
      array.push(value);
    }
  }
  else {
    let ix = array.indexOf(value);
    if (ix > -1) {
      array.splice(ix, 1);
    }
  }
  return array;
}
