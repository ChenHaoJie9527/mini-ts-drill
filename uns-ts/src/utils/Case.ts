/**
 * Uppercase: 大写
 * Lowercase: 小写
 * Capitalize: 首字母大写
 * Uncapitalize: 去掉首字母大写
 */

export type UppercaseRes = Uppercase<'abc'>; // ABC

export type LowercaseRes = Lowercase<'ABC'>; // abc

export type CapitalizeRes = Capitalize<'abc'>; // Abc

export type UncapitalizeRes = Uncapitalize<'Abc'>; // abc

/**
 * 源码：
 * type Uppercase<S extends string> = intrinsic
 * type Lowercase<S extends string> = intrinsic
 * type Capitalize<S extends string> = intrinsic
 * type Uncapitalize<S extends string> = intrinsic
 *
 * intrinsic：指的是固有的意思，就像 js 里面的有的方法打印会显示 [native code] 一样。这部分类型不是在 ts 里实现的，而是编译过程中由 js 实现的。
 * 其实就是 ts 编译器处理到这几个类型时就直接用 js 给算出来了。这是因为解析类型是要处理 AST 的，性能比较差，用 js 直接给算出来比较快
 */