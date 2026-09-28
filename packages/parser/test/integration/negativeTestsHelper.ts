export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only hi anna, should throw an exception",
    input: `
        hi anna
      `,
    output: SyntaxError,
  },
  {
    name: "only bye anna, should throw an exception",
    input: `
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "multiple hi anna, should throw an exception",
    input: `
        hi anna
        hi anna
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        hi anna
        hi anna
        bye anna
        bye anna
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        hi anna
        {
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        hi anna
        }
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        hi anna
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        hi anna
        {
          naam = 4
        }
        bye anna
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        hi anna
        anna cheppu ;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        hi anna
        anna cheppu 478
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        hi anna
        anna cheppu nijam tappu;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        hi anna
        anna cheppu ~!*;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        hi anna
        anna cheppu a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        hi anna
        anna idi a b c;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        hi anna
        anna idi a
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        hi anna
        anna idi ;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        hi anna
        anna idi a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        hi anna
        anna idi a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        hi anna
        anna idi
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    hi anna
    anna eppudu varaku (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        hi anna
        a = 4
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        hi anna
        a *=- 4;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        hi anna
        "hello" = 4;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        hi anna
        5 = 890;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        hi anna
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        hi anna
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        hi anna
        (a + 4;
        bye anna
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        hi anna
        a + 4);
        bye anna
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        hi anna
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        hi anna
        (a * (4 + 8 + 10);
        bye anna
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    hi anna
    anna idi a = b && ;
    bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    hi anna
    anna idi a = && b;
    bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    hi anna
    okavela anna (&&);
    bye anna;
      `,
    output: SyntaxError,
  },
  // float expression test
  {
    name: "float expression test with multiple continuous decimal points - 1, should throw an exception",
    input: `
    hi anna
    anna idi a = 1..2;
    bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple continuous decimal points - 2, should throw an exception",
    input: `
    hi anna
    anna idi a = ..2;
    bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple decimal points at different places, should throw an exception",
    input: `
    hi anna
    anna idi a = 1.2.3;
    bye anna;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        hi anna
        okavela anna (nijam)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        hi anna
        kakapothe anna {

        }
        bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        hi anna
       okavela anna {

       }
        bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        hi anna
        lekapothe anna (nijam) {
        }
        bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        hi anna
        lekapothe anna (nijam) {
        } lekapothe anna (nijam) {
        }
        bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        hi anna
        okavela anna (nijam) {

        } lekapothe anna (nijam)
        bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        hi anna
        okavela anna (nijam) {

        } lekapothe anna (nijam) {

        } lekapothe anna (nijam)
        bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        hi anna
        okavela anna (nijam) {

        } lekapothe anna
        bye anna;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        hi anna
        okavela anna (nijam) {

        } lekapothe anna (nijam) {

        } lekapothe anna
        bye anna;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        hi anna
          veredi chudu anna
        bye anna
      `,
    output: SyntaxError,
  },
]