import { describe, expect, it } from "vitest";
import { PickRes } from "../utils/Pick";
describe("should Pick", () => {
  it("test pick", () => {
    const _val: PickRes = { name: "test" };
    expect(_val.name).toBe('test')
  });
});
