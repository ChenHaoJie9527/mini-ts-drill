/**
 * Extract: 保留联合类型的某部分类型 即取交集
 */

export type IsExtract<T, U> = T extends U ? T : never;
export type ExtractRes = IsExtract<"a" | "b" | "c", "a" | "b">; // 'a' | 'b