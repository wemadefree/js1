import { getPath } from './lodashMisc'

type flattenByFn = (item: any, ix: number, arr: any[], parent: any, root: any) => any;

function flattenByScanner(array: any[], parent: any, root: any, fn: flattenByFn, output: any[]) {
  if (array) {
    let target, index = 0;
    for (let item of array) {
      output.push(item);
      target = fn(item, index++, array, parent, root);
      flattenByScanner(target, item, root, fn, output);
    }
  }
}

export function flattenBy(arrayOrObject: any, fn: string | flattenByFn): any[] {
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
  let output: any[] = [];
  flattenByScanner(arrayOrObject, root, root, fn, output);
  return output;
}
