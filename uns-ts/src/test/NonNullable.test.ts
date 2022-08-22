import { describe, expect, it } from "vitest";
import { IsNonNullable } from "../utils/NonNullable";
describe("NonNullable", () => {
  it("test, NonNullable", () => {
    const _val1: IsNonNullable<number> = 1; // never
    expect(_val1).toBeTypeOf("number");
  });
});
