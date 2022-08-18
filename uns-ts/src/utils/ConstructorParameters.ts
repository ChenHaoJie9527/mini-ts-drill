/**
 * ConstructorParameters: 提取构造器参数类型
 */
type getConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer K) => any ? K : never;
interface Person {
  list: any[];
}
interface PersonConstructor {
  new (name: string): Person;
}

export type PersonConstructorRes = getConstructorParameters<PersonConstructor>; // [name: string]
