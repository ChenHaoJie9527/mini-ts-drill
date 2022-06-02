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

// 提取数组类型中的第一个元素的类型
// 类型参数T通过extends约束为只能是任意类型的数组，用unknown表示
// any和unknown的区别是，unknown只能接收任意类型的值，而any不仅可以接收任意类型的值，耶可以赋值给任意类型，never类型除外
// 类型体操中经常用unknown接收和匹配任何类型，但很少把任何类型赋值给某个类型变量
// 通过对T进行模式匹配，将数组里的第一个元素提取到通过infer声明的局部变量K中，剩余的元素可以是任何类型的数组，用unknown接收，并将局部变量T返回
type GetArrayFirstItemType<T extends unknown[]> = T extends [
  infer K,
  ...unknown[]
]
  ? K
  : never;
type GetArrayFirstResult = GetArrayFirstItemType<[1, 2, 3]>; // 1
const first: GetArrayFirstResult = 1;

export {};
