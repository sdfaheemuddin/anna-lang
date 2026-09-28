import { RuntimeException } from "../../src";
import KaliPointerException from "../../src/exceptions/kaliPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          hi anna;
          a = 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          hi anna;
          a += 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          hi anna;
          a -= 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          hi anna;
          a -= 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          hi anna;
          a /= 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          hi anna;
          a;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a + b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a + 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a - 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a - b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a * 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a * b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          hi anna;
          a / 4;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          hi anna;
          a / b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          hi anna;
          anna cheppu a;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          hi anna;
          anna cheppu a, b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          hi anna;
          anna idi a = 8;
          anna cheppu a, b;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          hi anna;
          anna idi a = b = 8;
          bye anna;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        hi anna;
        anna idi a;
        a = 9;
        anna idi a = 0;
        bye anna;
      `,
    exception: RuntimeException,
  },
  // cases with kali
  {
    name: "interpreter use kali variable in expression, should throw an exception",
    input: `
      hi anna;
      anna idi a;
      anna cheppu a + 9;
      bye anna;
    `,
    exception: KaliPointerException,
  },
  {
    name: "interpreter use kali variable in expression - 2, should throw an exception",
    input: `
      hi anna;
      anna idi a = kali;
      anna cheppu a + 9;
      bye anna;
    `,
    exception: KaliPointerException,
  },
  {
    name: "interpreter use kali in variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna idi a = kali + 80;
      bye anna;
    `,
    exception: KaliPointerException,
  },
  {
    name: "interpreter use kali in variable initialisation expression - 2, should throw an exception",
    input: `
      hi anna;
      anna idi a = kali + "jam";
      bye anna;
    `,
    exception: KaliPointerException,
  },
  {
    name: "interpreter use kali variable in another variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna idi a;
      anna idi b = a + "hello";
      bye anna;
    `,
    exception: KaliPointerException,
  },
  {
    name: "interpreter use kali variable in complex expression, should throw an exception",
    input: `
      hi anna;
      anna idi a;
      anna idi b = ((a*9) * a + "hello");
      bye anna;
    `,
    exception: KaliPointerException,
  },
  // nijam - tappu case
  {
    name: "interpreter use nijam variable in expression, should throw an exception",
    input: `
      hi anna;
      anna idi a = nijam;
      anna cheppu a + 9;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use tappu variable in expression, should throw an exception",
    input: `
      hi anna;
      anna idi a = tappu;
      anna cheppu a + 9;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use nijam in variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna idi a = nijam + 80;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use tappu in variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna idi a = tappu + 80;
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use nijam variable in another variable initialisation expression, should throw an exception",
    input: `
      hi anna;
      anna idi a = nijam;
      anna idi b = a + "hello";
      bye anna;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use tappu variable in complex expression, should throw an exception",
    input: `
      hi anna;
      anna idi a = tappu;
      anna idi b = ((a*9) * a + "hello");
      bye anna;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one kali operand, should throw an exception",
    input: `
        hi anna
        (kali * (4 + 8 + 10));
        bye anna
      `,
    output: KaliPointerException,
  },
  {
    name: "complex expression test with one kali operand and one boolean operand, should throw an exception",
    input: `
        hi anna
        (kali * (nijam + 8 + 10));
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one kali operand and one boolean operand - 2, should throw kali pointer exception",
    input: `
        hi anna
        (nijam * (kali + 8 + 10));
        bye anna
      `,
    output: KaliPointerException,
  },
  {
    name: "complex expression test with one kali operand and one boolean operand - 3, should throw kali pointer exception",
    input: `
        hi anna
        (kali + nijam);
        bye anna
      `,
    output: KaliPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        hi anna
        (nijam * (4 + 8 + 10));
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        hi anna
        nijam + tappu;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        hi anna
        anna idi a = nijam, b = tappu;
        a + b;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        hi anna
        nijam * tappu;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        hi anna
        anna idi a = nijam, b = tappu;
        a * b;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        hi anna
        nijam / tappu;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        hi anna
        anna idi a = nijam, b = tappu;
        a / b;
        bye anna
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing kali, should throw an exception",
    input: `
        hi anna
        anna cheppu kali + 5;
        bye anna;
      `,
    output: KaliPointerException,
  },
  {
    name: "complex assign test with expression containing kali, should throw an exception",
    input: `
        hi anna
        anna idi a;
        a *= 5;
        bye anna;
      `,
    output: KaliPointerException,
  },
  {
    name: "complex assign test with expression containing nijam, should throw an exception",
    input: `
        hi anna
        anna idi a = nijam;
        a *= 5;
        bye anna;
      `,
    output: KaliPointerException,
  },
  {
    name: "complex assign test with expression containing kali - 2, should throw an exception",
    input: `
        hi anna
        anna idi a = kali;
        a /= 5;
        bye anna;
      `,
    output: KaliPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        hi anna
        anna eppudu varaku (nijam) {

        }
        bye anna;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        hi anna
        anna idi a = 0;
        anna eppudu varaku (a < 2) {
          anna cheppu "bhai";
        }
        bye anna;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        hi anna
        anna idi a = 0;
        okavela anna (nijam)
          chalu anna;
        bye anna;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of kali with &&, should throw an exception",
    input: `
        hi anna
        anna cheppu kali && 90;
        bye anna;
      `,
    output: KaliPointerException,
  },
  {
    name: "use of kali variable with &&, should throw an exception",
    input: `
        hi anna
        anna idi a;
        anna cheppu a && 90;
        bye anna;
      `,
    output: KaliPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      hi anna;
      anna cheppu "nijam" % 9;
      bye anna;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        hi anna
        anna idi a = 0;
        anna eppudu varaku (a < 2) {
          veredi chudu anna;
          a = 5;
        }
        bye anna;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        hi anna
        anna idi a = 0;
        okavela anna (nijam)
          veredi chudu anna
        bye anna;
      `,
    output: RuntimeException,
  },
];
