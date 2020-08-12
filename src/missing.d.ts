declare module 'lodash.conformsto' {
  export default function conformsTo(object: any, source: any): boolean
}

declare module 'slugify' {
  export default function slugify(
    string: string,
    options?:
      | {
        replacement?: string;
        remove?: RegExp;
        lower?: boolean;
        strict?: boolean;
        locale?: string;
      }
      | string,
  ): string;
}
