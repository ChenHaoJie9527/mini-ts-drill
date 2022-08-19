/**
 * Pick: 映射类型的语法用于构造新的索引类型，在构造的过程中可以对索引和值做一些修改和过滤
 */

export type IsPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type PickRes = IsPick<{ name: string; age: number }, "name">;
