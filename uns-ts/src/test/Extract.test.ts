import { describe, expect, it } from "vitest";
import { IsExtract } from "../utils/Extract";
describe("Extract", () => {
  it("should Extract", () => {
    const _val: IsExtract<"1" | "2" | "3" | "4" | "5", "1" | "2"> = "1";
    expect(_val).toBe("1");
  });
});
