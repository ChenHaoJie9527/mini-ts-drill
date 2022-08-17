/**
 * ReturnType: 提取函数返回类型
 */

type getReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer K
  ? K
  : never;
function getReturn(age: number) {
  return age;
}
export type FuncReturnType = getReturnType<typeof getReturn>;
