import { describe, expect, it } from "vitest";
import type { FuncReturnType } from "../utils/ReturnType";
describe("ReturnType", () => {
  it("should ReturnType test", () => {
    const res: FuncReturnType = 1;
    expect(res).toBeTypeOf("number");
  });
});
