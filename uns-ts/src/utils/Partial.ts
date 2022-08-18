/**
 * Partial: 索引类型可以通过映射类型的语法做修改，比如把索引变为可选
 */

type IsPartial<T> = {
  [P in keyof T]?: T[P];
};

export type PartialRes = IsPartial<{ name: "123"; age: 18 }>;
