/**
 * Exclude: 去除联合类型中的某一部分类型
 */
export type IsExclude<T, U> = T extends U ? never : T;
// 联合类型当作为类型参数出现在条件类型左边时，会被分散成单个类型传入，这叫做分布式条件类型
// 所以写法上可以简化， T extends U 就是对每个类型的判断。
// 过滤掉 U 类型，剩下的类型组成联合类型。也就是取差集。
export type ExcludeRes = IsExclude<'1' | '2' | '3', '1'>; // '2' | '3'