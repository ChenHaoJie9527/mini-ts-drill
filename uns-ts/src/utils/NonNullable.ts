/**
 * NonNullable: 判断是否为 非空类型 即是否为 null | undefined
 */
type IsNonNullable<T> = T extends null | undefined ? never : T;
type NonNullableRes1 = IsNonNullable<null>; // never
type NonNullableRes2 = IsNonNullable<undefined>; // undefined
type NonNullableRes3 = IsNonNullable<number>; // number
