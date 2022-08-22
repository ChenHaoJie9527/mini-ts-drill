/**
 * NonNullable: 判断是否为 非空类型 即是否为 null | undefined
 */
export type IsNonNullable<T> = T extends null | undefined ? never : T;
export type NonNullableRes1 = IsNonNullable<null>; // never
export type NonNullableRes2 = IsNonNullable<undefined>; // undefined
export type NonNullableRes3 = IsNonNullable<number>; // number
