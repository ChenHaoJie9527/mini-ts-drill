/**
 * Required: 索引类型里的索引变为可选，那么也就可以去掉可选
 */
type IsRequired<T> = {
  [K in keyof T]-?: T[K];
};

export type RequiredRes = IsRequired<{ name?: string; age?: number }>;
