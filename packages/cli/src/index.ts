#! /usr/bin/env node
import interpreter from "anna-lang-interpreter";
import chalk from "chalk";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// CLI configuration; the interpreter remains independent of file I/O and styling.
const accentColor = "#83aaff";
const repositoryUrl = "https://github.com/sdfaheemuddin/anna-lang";
const args = yargs(hideBin(process.argv))
  .scriptName("annalang")
  .usage("Usage: $0 <filepath.anna>")
  .example("$0 hello.anna", "Run an Anna Lang program")
  .demandCommand(1, 1, "Anna, provide a source file to run.")
  .help()
  .argv;
const filePath = String(args._[0]);
const originalLog = console.log;

try {
  // Synchronous reading keeps error handling and console restoration in one scope.
  const source = fs.readFileSync(filePath, "utf8");
  console.info(chalk.hex(accentColor)(repositoryUrl));
  console.log = (...values) => {
    originalLog(...values.map(value =>
      `${chalk.hex(accentColor)(">  ")}${chalk.greenBright(String(value))}`
    ));
  };
  interpreter.interpret(source);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(chalk.redBright(`Anna, could not run "${filePath}": ${message}`));
  process.exitCode = 1;
} finally {
  console.log = originalLog;
}
