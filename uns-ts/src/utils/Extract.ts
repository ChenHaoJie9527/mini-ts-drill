/**
 * Extract: 保留联合类型的某部分类型 即取交集
 */

type IsExtract<T, U> = T extends U ? T : never;
type ExtractRes = IsExtract<'a' | 'b' | 'c', 'a' | 'b'>; // 'a' | 'b