import KaliPointerException from "../../src/exceptions/kaliPointerException";
import annaLangModule from "../../src/module/annaLangModule";

import {
  IfStatementNagativeTests,
  NegativeExpressionsTests,
  NegativeStatementTests
} from "./negativeTestsHelper";
import {
  ExpressionsTests,
  IfStatementTests,
  StatementTests,
  WhileStatementTests
} from "./positiveTestsHelper";


type posTestObjType = typeof StatementTests[0];

type negTestObjType = {
  name: string;
  input: string;
  output: SyntaxErrorConstructor | typeof KaliPointerException;
};

StatementTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

ExpressionsTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

IfStatementTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

WhileStatementTests.forEach((testCase) => {
  _runPositiveTests(testCase);
});

IfStatementNagativeTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

NegativeStatementTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

NegativeExpressionsTests.forEach((testCase) => {
  _runNegativeTests(testCase);
});

function _runPositiveTests(testCase: posTestObjType) {
  test(testCase.name, () => {
    const parser = annaLangModule.getParser();
    const ast = parser.parse(testCase.input);
    expect(JSON.stringify(ast)).toBe(testCase.output);
  });
}

function _runNegativeTests(testCase: negTestObjType) {
  test(testCase.name, () => {
    const parser = annaLangModule.getParser();
    expect(() => parser.parse(testCase.input)).toThrow(testCase.output);
  });
}

// test("jest test", () => {
//   const parser = annaLangModule.getParser();
//   console.debug(JSON.stringify(parser.parse(`
//   hi anna
//       anna cheppu 9 == 90;
//       bye anna
//   `)));
// })
