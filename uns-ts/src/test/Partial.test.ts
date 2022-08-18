import { describe, expect, it } from "vitest";
import { PartialRes } from "../utils/Partial";
describe("should Partial", () => {
  it("Partial", () => {
    const _val: PartialRes = {
      name: "123",
      age: 18,
    };
    expect(_val).toBeTypeOf("object");
  });
});
