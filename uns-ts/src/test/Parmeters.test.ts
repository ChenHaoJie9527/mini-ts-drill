import { describe, expect, it } from "vitest";
import type { ParameterRes } from "../utils/Parameters";
describe("Parameter", () => {
  it("should parse parameters", () => {
    const params: ParameterRes = [25, "chj"];
    expect(params).toStrictEqual([25, "chj"]);
  });
});
