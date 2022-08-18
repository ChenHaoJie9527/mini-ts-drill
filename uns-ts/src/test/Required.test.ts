import { describe, expect, it } from "vitest";
import { RequiredRes } from "../utils/Required";
describe("should Required", () => {
  it("Required", () => {
    const _val: RequiredRes = {
      name: "foo",
      age: 12,
    };
    expect(_val.name).toBeTypeOf("string");
    expect(_val.age).toBeTypeOf("number");
  });
});
