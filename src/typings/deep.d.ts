/* tslint:disable:interface-name no-namespace ban-types */

declare namespace Deep {
  export type Readonly<T> =
    T extends ReadonlyArray<infer U> ? DeepReadonlyArray<U> :
    T extends Function ? T :
    T extends object ? ReadonlyObject<T> :
    T;

  export interface DeepReadonlyArray<T> extends ReadonlyArray<Readonly<T>> {}

  export type ReadonlyObject<T> = {
    readonly [P in keyof T]: Readonly<T[P]>;
  };
}
