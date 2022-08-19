/**
 * Record: 用于创建索引类型 传入 Key 和 Value
 */
 export type res = keyof any; // res = string | number | symbol

// 这里的 keyof any 的类型 为 string | number | symbol 是符合索引类型的 索引要求的
type IsRecord<T extends keyof any, K> = {
  [P in T]: K;
};

export type R1 = IsRecord<string, number>; // {[x: string]: number}
export type R2 = IsRecord<"name" | "age", string>; // {name: string, age: string}
export type R3 = IsRecord<"name" | "age", string | number>; // {name: string | number, age: string | number}
