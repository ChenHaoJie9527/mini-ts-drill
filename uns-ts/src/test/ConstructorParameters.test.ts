import { describe, expect, it } from "vitest";
import { PersonConstructorRes } from "../utils/ConstructorParameters";
describe("ConstructorParameters", () => {
  it("test ConstructorParameters", () => {
    const _val: PersonConstructorRes = ["123"];
    expect(_val).toStrictEqual(["123"]);
  });
});
