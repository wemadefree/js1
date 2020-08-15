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
