/**
 * 模式匹配
 *  1.TS同样支持模式匹配，通过匹配规则，找到匹配的部分，提取合适的部分
 *  2.通过extends对类型参数做匹配，然后使用 infer 声明局部类型变量存储起来，如果匹配则从该局部变量中提取出来，如果不匹配则返回never
 */

// 例子：type p = Promise<'guang'>; 提取Promise返回值类型
type GetPromiseValue<T> = T extends Promise<infer K> ? K : never;
type getPromiseRes = GetPromiseValue<Promise<"guang">>; // 'guang'
const str: getPromiseRes = 'guang';
console.log('str: ' + str);
/**
 * 可以将模式匹配应用到数组，字符串，函数，构造器类型等应用中
 */

// Array类型
// 提取数组第一个元素的类型
type FirstItemType<T extends unknown[]> = T extends [infer K, ...unknown[]]? K : never;
type GetFirstType = FirstItemType<['1', 1, 2, false]>; // '1'

export {};
