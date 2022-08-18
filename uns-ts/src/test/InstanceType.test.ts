import { describe, expect, it } from "vitest";
import { InstanceTypeRes } from "../utils/InstanceType";
describe("InstanceType", () => {
  it("should InstanceType", () => {
    const _val: InstanceTypeRes = false;
    expect(_val).toBeTypeOf("boolean");
  });
});
