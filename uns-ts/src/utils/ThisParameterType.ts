/**
 * ThisParameterType： 提取函数中的this类型
 */

type Person = {
  name: string;
};

function getThisParameterType(this: Person) {
  console.log(this.name);
}

// getThisParameterType.call({}); // 型 "{}" 中缺少属性 "name"，但类型 "Person" 中需要该属性

// 通过 ThisParameterType 内置高级类型提取 函数this类型
export type ThisParameterTypeRes = ThisParameterType<typeof getThisParameterType>; // {name: string}
