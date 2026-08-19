import assert from "node:assert/strict";
import test from "node:test";
import { validateFile } from "../genome/validate.mjs";

const fixture = (name) => new URL(`./fixtures/${name}`, import.meta.url);

test("the complete fixture satisfies Experience Genome v0.1", async () => {
  const result = await validateFile(fixture("valid-technique.json"));
  assert.equal(result.valid, true, JSON.stringify(result.errors, null, 2));
});

test("an incomplete and out-of-range entry is rejected", async () => {
  const result = await validateFile(fixture("invalid-technique.json"));
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.keyword === "required"));
  assert.ok(result.errors.some((error) => error.instancePath === "/saturationScore"));
  assert.ok(result.errors.some((error) => error.instancePath === "/originalityScore"));
});
