import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`hi anna;
    anna idi a = 4;
    {
      anna idi a = 90;
      anna cheppu a;
    }
    anna cheppu a;
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi anna;
    anna idi a = 4;
    {
      a = 90;
      anna cheppu a;
    }
    anna cheppu a;
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi anna;
    anna idi a = 4;
    {
      anna cheppu a;
    }
    anna cheppu a;
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna;
    anna idi a = 0;
    anna eppudu varaku (a < 2) {
      anna cheppu "bhai";
      a += 1;
    }
    bye anna;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna;
    anna idi a = 0, b = 0;
    anna eppudu varaku (a < 2) {
      anna eppudu varaku (b < 1) {
        anna cheppu "bhai";
        b += 1;
      }
      a += 1;
    }
    bye anna;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna;
    anna idi a = 0;
    anna eppudu varaku (a < 2) {
      anna idi b = 0;
      anna eppudu varaku (b < 2) {
        anna cheppu "bhai";
        b += 1;
        okavela anna (b == 1)
          chalu anna;
      }
      a += 1;
    }
    bye anna;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna idi a = 0;
    anna eppudu varaku (a < 10) {
      anna cheppu a;
      a += 1;
      okavela anna (a == 6) {
        chalu anna;
      }
    }
    anna cheppu "done";
    bye anna
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna idi a = 0;
    anna eppudu varaku (a < 10) {
      anna cheppu a;
      a += 1;
      okavela anna (a == 6)
        chalu anna;
    }
    anna cheppu "done";
    bye anna
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna idi a = 0;
    anna eppudu varaku (a < 10) {
      anna cheppu a;
      a += 1;
      okavela anna (a == 3) {
        chalu anna;
      }
      anna cheppu "2 baar hi chapunga";
    }
    anna cheppu "done";
    bye anna
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    
    anna eppudu varaku (nijam) {
      anna cheppu "bhai";
    }
    bye anna;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi anna
    anna idi x = 6;
    okavela anna (x < 5) {
      anna cheppu "x < 5";
    } lekapothe anna (x < 8) {
      anna cheppu "x < 8";
    } okavela anna (x < 4) {
      anna cheppu "x < 4";
    } kakapothe anna {
      anna cheppu "x > 4";
    }
    bye anna;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi anna
//     anna idi a = 0;
//     anna eppudu varaku (a < 10) {
//       anna cheppu a;
//       a += 1;
//       okavela anna (a == 3) {
//         chalu anna;
//       }
//       anna cheppu "2 baar hi chapunga";
//     }
//     anna cheppu "done";
//     bye anna
//     `);
// });
