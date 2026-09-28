// Exercise the actual built CLI, including exit codes used by automation.
const assert = require("assert");
const { spawnSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const cliPath = path.resolve(__dirname, "../bin/index.js");
const examplePath = path.resolve(__dirname, "../../../examples/hello.anna");
const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "annalang-"));
const run = (args) => spawnSync(process.execPath, [cliPath, ...args], {
  encoding: "utf8",
  env: { ...process.env, FORCE_COLOR: "0" },
});

try {
  const example = run([examplePath]);
  assert.strictEqual(example.status, 0, example.stderr);
  assert.deepStrictEqual(example.stdout.trim().split(/\r?\n/).slice(1), [
    ">  Keka Anna", ">  nijam tappu kali", ">  1", ">  3",
  ]);
  const help = run(["--help"]);
  assert.strictEqual(help.status, 0);
  assert.match(help.stdout, /annalang <filepath\.anna>/);
  assert.notStrictEqual(run([]).status, 0);
  assert.notStrictEqual(run([path.join(temporaryDirectory, "missing.anna")]).status, 0);
  const invalidPath = path.join(temporaryDirectory, "invalid.anna");
  fs.writeFileSync(invalidPath, "hi anna\nanna cheppu ;\nbye anna");
  const invalid = run([invalidPath]);
  assert.notStrictEqual(invalid.status, 0);
  assert.match(invalid.stderr, /could not run/);
  console.info("Anna Lang CLI smoke checks passed.");
} finally {
  fs.rmSync(temporaryDirectory, { recursive: true, force: true });
}
