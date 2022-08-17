/**
 * Parameters: 提取函数参数类型
 */

type GetParameters<T extends (...args: any) => any> = T extends (
  ...args: infer K
) => any
  ? K
  : never;

function Parameters(age: number, name: string) {}
export type ParameterRes = GetParameters<typeof Parameters>; // 提取泛型参数的类型参数  [age: number, name: string]
