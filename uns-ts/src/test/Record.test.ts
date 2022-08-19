import { describe, expect, it } from "vitest";
import { R1, R2, R3 } from "../utils/Record";
describe("Record", () => {
  it("test Record", () => {
    const _val1: R1 = {
      name: 123,
    };
    const _val2: R2 = {
      name: "chj",
      age: "123",
    };
    const _val3: R3 = {
      name: 1,
      age: 2,
    };
    expect(_val1.name).not.toBeUndefined();
    expect(_val2.age).toBeTypeOf("string");
    expect(_val2.name).toBeTypeOf("string");
    expect(_val3.age).toBeTypeOf("number");
    expect(_val3.name).toBeTypeOf("number");
  });
});
