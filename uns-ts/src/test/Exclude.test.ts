import { describe, expect, it } from "vitest";
import { IsExclude } from "../utils/Exclude";
describe("should Exclude", () => {
  it("test Exclude", () => {
    type Res = IsExclude<"1" | "2", "1">; // 移除 '1'
    const _val: Res = "2";
    expect(_val).toBe("2");
  });
});
