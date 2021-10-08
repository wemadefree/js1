import { upperFirst } from './lodashMisc'
import * as miscArray from './miscArray'
import * as lodashArray from './lodashArray'
import type { Collection } from 'lodash';


const installedSym = Symbol('extendArrayProtoJS1');

/** Install and declare globally

import { extendArrayProto, IJs1ExtendedArrayProto } from '@olibm/js1/lib/extendArrayProto'

extendArrayProto(Array.prototype);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Array<T> extends IJs1ExtendedArrayProto<T> { }
}
*/
export function extendArrayProto(proto?: any) {
  if (!proto) {
    proto = Array.prototype;
  }
  if (!proto || installedSym in proto) {
    return;
  }
  Object.defineProperty(proto, installedSym, { value: true });
  for (const [fnKey, fn] of Object.entries<Function>({ ...lodashArray, ...miscArray })) {
    if (!fnKey || typeof fnKey !== 'string' || typeof fn !== 'function') {
      continue;
    }
    const protoKey = `js1${upperFirst(fnKey)}`;
    if (proto[protoKey]) {
      continue;
    }
    Object.defineProperty(proto, protoKey, {
      value: function (this: any, ...args: any[]) {
        return fn.call(undefined, this, ...args);
      }
    })
  }
}

/* eslint-disable @typescript-eslint/no-empty-interface */

type Js1Rename<T> = { [K in keyof T as `js1${Capitalize<string & K>}`]: T[K] };
type StringKeys<T> = Extract<keyof T, string>;
type LodashArrayTypes<T> = Pick<Collection<T>, StringKeys<typeof lodashArray>>;
type MiscArrayTypes<T> = Omit<typeof miscArray, keyof LodashArrayTypes<T>>;
type Js1ExtendedArrayProto<T> = Js1Rename<LodashArrayTypes<T> & MiscArrayTypes<T>>;

export interface IJs1ExtendedArrayProto<T> extends Js1ExtendedArrayProto<T> { }
