/**
 * Readonly: 通过索引类型的映射类型语法重新构造索引，添加 Readonly 只读字段，可实现只读索引类型
 */
type Readonlys<T> = {
  readonly [K in keyof T]: T[K];
};

export type ReadonlyRes = Readonlys<{ name: string; age: number }>;
