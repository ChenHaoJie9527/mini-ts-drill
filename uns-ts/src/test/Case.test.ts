import { describe, expect, it } from "vitest";
import {
  UppercaseRes,
  LowercaseRes,
  CapitalizeRes,
  UncapitalizeRes,
} from "../utils/Case";
describe("should Case", () => {
  it("should Case", () => {
    const _val1: UppercaseRes = "ABC";
    const _val2: LowercaseRes = "abc";
    const _val3: CapitalizeRes = "Abc";
    const _val4: UncapitalizeRes = "abc";
    expect(_val1).toBe("ABC");
    expect(_val2).toBe("abc");
    expect(_val3).toBe("Abc");
    expect(_val4).toBe("abc");
  });
});
