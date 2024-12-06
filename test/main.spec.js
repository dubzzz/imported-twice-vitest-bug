import { test, vi } from "vitest";
import { compute } from "../src/main";
import { expect } from "chai";

vi.mock("../src/constants.js", () => ({ default: 42 }));

test("sum", async () => {
  expect(await compute()).toBe(84);
});
