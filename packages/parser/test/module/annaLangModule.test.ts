import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import AnnaLangModule from "../../src/module/annaLangModule";

test("test annaLangModule should success", () => {
  expect(AnnaLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(AnnaLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(AnnaLangModule.getProgram()).toBeInstanceOf(Program);
  expect(AnnaLangModule.getParser()).toBeInstanceOf(Parser);
});
