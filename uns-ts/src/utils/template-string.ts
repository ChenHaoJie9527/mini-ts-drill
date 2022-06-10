// 模板字面量类型
// 联合类型会逐一被展开
// 通过占位符 ${Direction}类型支持 string | number | boolean | bigint
type Direction = 'left' | 'right' | 'top' | 'bottom';
type CssPadding = `padding-${Direction}`; // "padding-left" | "padding-right" | "padding-top" | "padding-bottom"
type CssMargin = `margin-${Direction}`; // "margin-left" | "margin-right" | "margin-top" | "margin-bottom"

type EventName<T extends string> = `${T}Changlog`;
type Concat<T extends string, K extends string> = `${T}-${K}`;
type ToString<T extends string | number | boolean | bigint> = `${T}`;

type T0 = EventName<'foo'>; // fooChanglog
type T1 = Concat<'hello', 'world'>; // hello-world
type T3 = ToString<'chj' | 123 | false | -1234n> // "chj" | "false" | "123" | "-1234"

// 给 EventName 和 Concat 传入联合类型