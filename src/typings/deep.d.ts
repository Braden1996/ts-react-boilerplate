declare namespace Deep {
  export type Readonly<T> =
    T extends ReadonlyArray<infer U> ? ReadonlyArray<U> :
    T extends Function ? T :
    T extends object ? ReadonlyObject<T> :
    T;

  export interface ReadonlyArray2<T> extends ReadonlyArray<Readonly<T>> {}

  export type ReadonlyObject<T> = {
    readonly [P in keyof T]: Readonly<T[P]>;
  };
}
