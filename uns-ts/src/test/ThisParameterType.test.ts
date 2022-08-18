import { describe, expect, it } from "vitest";
import { ThisParameterTypeRes } from "../utils/ThisParameterType";
describe("should ThisParameterType", () => {
  it("test ThisParameterType", () => {
    const _val: ThisParameterTypeRes = {
      name: "123",
    };
    expect(_val).toBeTypeOf("object");
  });
});
