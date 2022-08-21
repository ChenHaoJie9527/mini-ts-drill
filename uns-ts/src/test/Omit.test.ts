import { describe, expect, it } from "vitest";
import { IsOmit } from "../utils/Omit";
describe("Omit", () => {
  it("should Omit", () => {
    const _val: IsOmit<{ name: string; age: number }, "name"> = { age: 1 };
    expect(_val.age).toBe(1);
  });
});
