import { test, vi } from "vitest";
import { preload, compute } from "../src/main";
import { expect } from "chai";

vi.mock("../src/constants.js", () => ({ default: 42 }));

test("sum", async () => {
  preload();
  expect(await compute()).toBe(84);
});
