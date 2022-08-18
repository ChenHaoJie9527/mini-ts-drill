/**
 * InstanceType: 提取构造函数返回值类型
 */
type getInstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer K
  ? K
  : never;
interface Persons {
  new (name: string): boolean;
}

export type InstanceTypeRes = getInstanceType<Persons>; // boolean
