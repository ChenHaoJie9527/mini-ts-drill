import { describe, expect, it } from "vitest";
import { IsAwaited } from "../utils/Awaited";
describe("Awaited", () => {
  it("test Awaited", () => {
    const _val: IsAwaited<Promise<Promise<{ age: number }>>> = {
      age: 123,
    };
    expect(_val.age).toBeTypeOf("number");
  });
});
