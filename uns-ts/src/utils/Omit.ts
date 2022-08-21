/**
 * Omit: Pick是可以取出索引类型的一部分构造成新的索引类型。那反过来就是去掉这部分索引构造成新的索引类型
 */
type IsOmit<T, U extends keyof any> = Pick<T, Exclude<keyof T, U>>;
// 1. 类型参数 T 为待处理类型， 类型参数 U 为索引允许的类型，string | number | symbol
// 2. 通过 Pick 取出一部分相同索引构造成新的索引类型，这里用到 Exclude 把U对应的索引去掉，剩下的索引保留
type OmitRes = IsOmit<{ name: string; age: number }, "name">;
