import { sum } from "../utils/sum";
test("adds 1 + 2 to 3", () => {
  expect(sum(1, 2)).toBeGreaterThan(1); //toBeGreaterThan：用于测试比较 输入的值是否小于 expect输入的值 相当于 a > b的关系
});
