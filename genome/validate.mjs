import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

export async function createValidator() {
  const schema = JSON.parse(await readFile(new URL("./experience-genome.schema.json", import.meta.url), "utf8"));
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  addFormats(ajv);
  return ajv.compile(schema);
}

export async function validateFile(file, validate) {
  validate ??= await createValidator();
  const value = JSON.parse(await readFile(file, "utf8"));
  return { valid: validate(value), errors: validate.errors ?? [] };
}

async function main() {
  const directory = path.resolve("techniques");
  const files = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => path.join(directory, entry.name));

  if (files.length === 0) {
    console.log("No accepted technique entries found; schema fixtures are covered by the test suite.");
    return;
  }

  let failed = false;
  const validate = await createValidator();
  for (const file of files) {
    const result = await validateFile(file, validate);
    if (result.valid) console.log(`VALID ${path.relative(process.cwd(), file)}`);
    else {
      failed = true;
      console.error(`INVALID ${path.relative(process.cwd(), file)}`);
      for (const error of result.errors) console.error(`  ${error.instancePath || "/"} ${error.message}`);
    }
  }
  if (failed) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === new URL(`file://${path.resolve(process.argv[1])}`).href) await main();
