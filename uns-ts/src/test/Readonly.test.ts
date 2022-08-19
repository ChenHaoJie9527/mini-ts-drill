import { describe, expect, it } from "vitest";
import { ReadonlyRes } from "../utils/Readonly";
describe("Readonly", () => {
  it("test Readonly", () => {
    const _val: ReadonlyRes = {
      name: "123",
      age: 123,
    };
    expect(_val.name).toBe("123");
    expect(_val.age).toBe(123);
  });
});
