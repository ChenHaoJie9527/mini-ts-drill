/**
 * Awaited: 提取 Promise 的 ValueType 返回值类型
 *  1. T 是待处理类型参数
 *  2. 如果 T 是 null | undefined 类型，就返回 T
 *  3. 如果 T 是 object 类型 并带有 then 方法，那么就提取then方法的 onfulfilled 参数类型带 infer U局部变量中
 *  4. 继续提取 onfulfilled 函数类型的第一个参数类型，也就是 Promise 返回值的类型到 infer K 中
 *  5. 递归处理 infer K类型，直到不满足上面条件
 *  6. 返回never
 */
export type IsAwaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onfulfilled: infer U): any }
  ? U extends (value: infer K, ...args: any) => any
    ? IsAwaited<K>
    : never
  : T;

export type AwaitedRes = IsAwaited<Promise<Promise<{ name: string }>>>; // {name: string}

// 问题一：为什么要提取 then 方法的第一个参数的返回值类型？
// 实际上 then 回调的第一个参数就是 onfulfilled 回调函数 它的第一个参数则是返回值类型 {name: string}
// new Promise<{ name: string }>((resolve) => {
//   resolve({ name: "Chj" });
// }).then((res) => {});

// 实际上内置高级类型不再限制必须是 Promise， 而是只要对象且有 then 方法就可以
export const hasThenObj = {
  then(onfulfilled: (value: number, ...args: any) => any) {
    return "chj";
  },
};
export type Res = IsAwaited<typeof hasThenObj>; // 提取 onfulfilled 函数类型的第一个参数类型 value
