/* eslint-disable @typescript-eslint/no-var-requires */

// important: MUST use require()!
const { fileURLToPath } = require("node:url");
const { astToString, default: openapiTS } = require('../dist/index.cjs');

describe("CJS bundle", () => {
  it("basic", async () => {
    const output = `/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

${astToString(
  await openapiTS(new URL("../examples/stripe-api.yaml", import.meta.url)),
)}`;
    expect(output).toMatchFileSnapshot(
      fileURLToPath(new URL("../examples/stripe-api.ts", import.meta.url)),
    );
  });
});