export const StatementTests = [
  // init statement tests
  {
    name: "empty init statement test, should success",
    input: `
      hi anna
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon, should success",
    input: `
      hi anna;
      bye anna;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "init statement test with semi colon - 2, should success",
    input: `
      hi anna;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  {
    name: "empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi anna
      bye anna;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[]}}`,
  },
  // empty statement tests
  {
    name: "multiple empty statements test, should success",
    input: `
      hi anna
      ;
      ;
      ;;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"},{\"type\":\"EmptyStatement\"}]}}`,
  },
  // block statement tests
  {
    name: "block statement test with empty block, should success",
    input: `
      hi anna
      {}
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with empty block and semi colon, should success",
    input: `
      hi anna;
      {};
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[]}]}}`,
  },
  {
    name: "block statement test with assignment expression inside, should success",
    input: `
      hi anna;
      {
        naam = 4;
      }
      bye anna;
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"naam\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}]}}`,
  },
  {
    name: "block statement test with variable statement inside, should success",
    input: `
      hi anna
      {
        anna idi a = 4;
      }
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"BlockStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":4}}]}]}]}}`,
  },
  // print statement test
  {
    name: "print statement test with string printing, should success",
    input: `
      hi anna
      anna cheppu "puff...";
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"StringLiteral\",\"value\":\"puff...\"}]}]}}`,
  },
  {
    name: "print statement test with number printing, should success",
    input: `
      hi anna
      anna cheppu 478;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"NumericLiteral\",\"value\":478}]}]}}`,
  },
  {
    name: "print statement test with boolean printing, should success",
    input: `
      hi anna
      anna cheppu nijam, tappu;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"BooleanLiteral\",\"value\":\"nijam\"},{\"type\":\"BooleanLiteral\",\"value\":\"tappu\"}]}]}}`,
  },
  {
    name: "print statement test with identifier printing, should success",
    input: `
      hi anna
      anna cheppu a, b, c;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"PrintStatement\",\"expressions\":[{\"type\":\"IdentifierExpression\",\"name\":\"a\"},{\"type\":\"IdentifierExpression\",\"name\":\"b\"},{\"type\":\"IdentifierExpression\",\"name\":\"c\"}]}]}}`,
  },
  {
    name: "print statement test with kali printing, should success",
    input: `
      hi anna
      anna cheppu kali;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"NullLiteral","value":"kali"}]}]}}`,
  },
  {
    name: "print statement test with variable kali printing, should success",
    input: `
      hi anna
      anna idi a = kali;
      anna cheppu a;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"kali"}}]},{"type":"PrintStatement","expressions":[{"type":"IdentifierExpression","name":"a"}]}]}}`,
  },
  {
    name: "print statement test with logical AND, should success",
    input: `
      hi anna
      anna cheppu a && b;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}}]}]}}`,
  },
  {
    name: "print statement test with assignment, should success",
    input: `
      hi anna
      anna cheppu a = 9;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"NumericLiteral","value":9}}]}]}}`,
  },
  {
    name: "print statement test with logical OR, should success",
    input: `
      hi anna
      anna cheppu 9 || 90;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"LogicalExpression","operator":"||","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "print statement test with equality operator, should success",
    input: `
      hi anna
      anna cheppu 9 == 90;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"==","left":{"type":"NumericLiteral","value":9},"right":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  // variable statement test
  {
    name: "variable statement test with basic variable declaration, should success",
    input: `
      hi anna
      anna idi a, b, c;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"kali\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"kali\"}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"c\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"kali\"}}]}]}}`,
  },
  {
    name: "variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi anna
      anna idi a = 10, b;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NullLiteral\",\"value\":\"kali\"}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation, should success",
    input: `
      hi anna
      anna idi a = 10, b = 5;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":10}},{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"init\":{\"type\":\"NumericLiteral\",\"value\":5}}]}]}}`,
  },
  {
    name: "variable statement test with multiple variable initialisation with same value, should success",
    input: `
      hi anna
      anna idi a = b = 5;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"b\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":5}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with some expression, should success",
    input: `
      hi anna
      anna idi a = 7 + 90;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"VariableStatement\",\"declarations\":[{\"type\":\"VariableDeclaration\",\"id\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"init\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":7},\"right\":{\"type\":\"NumericLiteral\",\"value\":90}}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with kali literal, should success",
    input: `
      hi anna
      anna idi a = kali;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"kali"}}]}]}}`,
  },
  {
    name: "variable statement test with variable initialisation with kali literal, should success",
    input: `
      hi anna
      anna idi a = kali;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NullLiteral","value":"kali"}}]}]}}`,
  },
];

export const ExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi anna
      a = 4;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi anna
      a *= 4;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"*=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "float number assignment expression test, should success",
    input: `
      hi anna
      a = 1.2;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":1.2}}}]}}`,
  },
  {
    name: "float number assignment expression test with negative number, should success",
    input: `
      hi anna
      a = -1.2;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":-1.2}}}]}}`,
  },
  {
    name: "float number assignment expression test without digits before decimal point, should success",
    input: `
      hi anna
      a = .6;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":0.6}}}]}}`,
  },
  {
    name: "float number assignment expression test with negative number and without digits before decimal point, should success",
    input: `
      hi anna
      a = -.6;
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":-0.6}}}]}}`,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi anna
      (a + 4);
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}]}}`,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi anna
      (a + 4) * 10 + (5 - 4);
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"-\",\"left\":{\"type\":\"NumericLiteral\",\"value\":5},\"right\":{\"type\":\"NumericLiteral\",\"value\":4}}}}]}}`,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi anna
      (a * (4 + 8) + 10);
      bye anna
    `,
    output: `{\"type\":\"Program\",\"body\":{\"type\":\"InitStatement\",\"body\":[{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"IdentifierExpression\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"NumericLiteral\",\"value\":4},\"right\":{\"type\":\"NumericLiteral\",\"value\":8}}},\"right\":{\"type\":\"NumericLiteral\",\"value\":10}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    hi anna
    (x = 9);
    bye anna;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  {
    name: "paranthesized expression test with assignment expression, should success",
    input: `
    hi anna
    (x >= 9);
    bye anna;
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}}`,
  },
  // kali and boolean expression test
  {
    name: "complex expression test with one kali operand, should success",
    input: `
        hi anna
        (kali * (4 + 8 + 10));
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"kali"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one kali operand and one boolean operand, should success",
    input: `
        hi anna
        (kali * (nijam + 8 + 10));
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"NullLiteral","value":"kali"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one kali operand and one boolean operand - 2, should success",
    input: `
        hi anna
        (nijam * (kali + 8 + 10));
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"kali"},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "complex expression test with one kali operand and one boolean operand - 3, should success",
    input: `
        hi anna
        (kali + nijam);
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"kali"},"right":{"type":"BooleanLiteral","value":"nijam"}}}]}}`,
  },
  {
    name: "complex expression test with one boolean operand, should success",
    input: `
        hi anna
        (nijam * (4 + 8 + 10));
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"BinaryExpression","operator":"+","left":{"type":"NumericLiteral","value":4},"right":{"type":"NumericLiteral","value":8}},"right":{"type":"NumericLiteral","value":10}}}}]}}`,
  },
  {
    name: "expression test with only boolean operand, should success",
    input: `
        hi anna
        nijam + tappu;
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"+","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"BooleanLiteral","value":"tappu"}}}]}}`,
  },
  {
    name: "multiplicative expression test with only boolean operand, should success",
    input: `
        hi anna
        nijam * tappu;
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"*","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"BooleanLiteral","value":"tappu"}}}]}}`,
  },
  {
    name: "division expression test with only boolean operand, should success",
    input: `
        hi anna
        nijam / tappu;
        bye anna
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":"/","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"BooleanLiteral","value":"tappu"}}}]}}`,
  },
  {
    name: "print statement test with expression containing kali, should success",
    input: `
        hi anna
        anna cheppu kali + 5;
        bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"PrintStatement","expressions":[{"type":"BinaryExpression","operator":"+","left":{"type":"NullLiteral","value":"kali"},"right":{"type":"NumericLiteral","value":5}}]}]}}`,
  },
  // logical expression test
  {
    name: `logical "&&" test with nijam tappu, should success`,
    input: `
        hi anna
        okavela anna (nijam && tappu);
        bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"BooleanLiteral","value":"tappu"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "&&" test with expression, should success`,
    input: `
        hi anna
        okavela anna (a + b && d);
        bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "&&" test in variable declaration, should success`,
    input: `
        hi anna
        anna idi a = b && d;
        bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"&&","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
  // logical OR
  {
    name: `logical "||" test with nijam tappu, should success`,
    input: `
        hi anna
        okavela anna (nijam || tappu);
        bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BooleanLiteral","value":"nijam"},"right":{"type":"BooleanLiteral","value":"tappu"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "||" test with expression, should success`,
    input: `
        hi anna
        okavela anna (a + b || d);
        bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BinaryExpression","operator":"+","left":{"type":"IdentifierExpression","name":"a"},"right":{"type":"IdentifierExpression","name":"b"}},"right":{"type":"IdentifierExpression","name":"d"}},"consequent":{"type":"EmptyStatement"},"alternates":[]}]}}`,
  },
  {
    name: `logical "||" test in variable declaration, should success`,
    input: `
        hi anna
        anna idi a = b || d;
        bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"LogicalExpression","operator":"||","left":{"type":"IdentifierExpression","name":"b"},"right":{"type":"IdentifierExpression","name":"d"}}}]}]}}`,
  },
  {
    name: `identifier name starting with "nijam", should success`,
    input: `
      hi anna
      anna idi nijamValue = nijam;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"nijamValue"},"init":{"type":"BooleanLiteral","value":"nijam"}}]}]}}`,
  },
  {
    name: `identifier name starting with "tappu", should success`,
    input: `
      hi anna
      anna idi tappuValue = 10;
      bye anna
    `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"tappuValue"},"init":{"type":"NumericLiteral","value":10}}]}]}}`,
  },
];

export const IfStatementTests = [
  {
    name: "if statement success test - 1: only if",
    input: `
    hi anna
    okavela anna (nijam) {
    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 2: if else both",
    input: `
    hi anna
    okavela anna (nijam) {
    } kakapothe anna {

    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"BlockStatement","body":[]}]}]}}`,
  },
  {
    name: "if statement success test - 3: if only with comarison condn",
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x >= 9) {
      x = 5;
    } 
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x == 9) {
      x = 5;
    } 
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 4: if only with equality condn",
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x == 9) {
      x = 5;
    } 
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"==","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 5: if only with inequality condn",
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x != 9) {
      x = 5;
    } 
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[]}]}}`,
  },
  {
    name: "if statement success test - 6: else with only expression statement",
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x != 9) {
      x = 5;
    } kakapothe anna (x >= 9);
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}}]},"alternates":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}]}}`,
  },
  {
    name: "if statement success test - 7: with block",
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x != 9)
      x = 5;
    kakapothe anna (x >= 9);
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"x"},"init":{"type":"NumericLiteral","value":9}}]},{"type":"IfStatement","test":{"type":"BinaryExpression","operator":"!=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"consequent":{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":5}}},"alternates":[{"type":"ExpressionStatement","expression":{"type":"BinaryExpression","operator":">=","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}}}]}]}}`,
  },
  {
    name: "else-if statement success test - 1: if-else-if one level ladder",
    input: `
    hi anna
    okavela anna (nijam) {
    } lekapothe anna (nijam) {
    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}}]}]}}`
  },
  {
    name: "else-if statement success test - 2: if-else-if one level ladder with else",
    input: `
    hi anna
    okavela anna (nijam) {
    } lekapothe anna (nijam) {
    } kakapothe anna {
    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"BlockStatement","body":[]}]}]}}`
  },
  {
    name: "else-if statement success test - 3: if-else-if multiple levels ladder",
    input: `
    hi anna
    okavela anna (nijam) {
    } lekapothe anna (nijam) {
    } lekapothe anna (nijam) {
    } lekapothe anna (nijam) {
    } lekapothe anna (nijam) {
    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}}]}]}}`
  },
  {
    name: "else-if statement success test - 4: if-else-if multiple levels ladder with else",
    input: `
    hi anna
    okavela anna (nijam) {
    } lekapothe anna (nijam) {
    } lekapothe anna (nijam) {
    } lekapothe anna (nijam) {
    } lekapothe anna (nijam) {
    } kakapothe anna {
    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]},"alternates":[{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"IfStatement","test":{"type":"BooleanLiteral","value":"nijam"},"consequent":{"type":"BlockStatement","body":[]}},{"type":"BlockStatement","body":[]}]}]}}`
  },
];

export const WhileStatementTests = [
  {
    name: "while statement success test: only if",
    input: `
    hi anna
    anna eppudu varaku (nijam) {
    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BooleanLiteral","value":"nijam"},"body":{"type":"BlockStatement","body":[]}}]}}`,
  },
  {
    name: "while statement success test: with some body",
    input: `
    hi anna
    anna eppudu varaku (x > 9) {
      anna cheppu "hello";
    }
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement",
    input: `
    hi anna
    anna eppudu varaku (x > 9)
      anna cheppu "hello";
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}}]}}`,
  },
  {
    name: "while statement success test: with single statement as body and statement outside of body",
    input: `
    hi anna
    anna eppudu varaku (x > 9)
      anna cheppu "hello";
    anna idi a = 90;
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"PrintStatement","expressions":[{"type":"StringLiteral","value":"hello"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with break statement",
    input: `
    hi anna
    anna eppudu varaku (x > 9) {
      chalu anna;
    }
    anna idi a = 90;
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"BreakStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
  {
    name: "while statement success test: with continue statement",
    input: `
    hi anna
    anna eppudu varaku (x > 9) {
      veredi chudu anna;
    }
    anna idi a = 90;
    bye anna;
      `,
    output: `{"type":"Program","body":{"type":"InitStatement","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"IdentifierExpression","name":"x"},"right":{"type":"NumericLiteral","value":9}},"body":{"type":"BlockStatement","body":[{"type":"ContinueStatement"},{"type":"EmptyStatement"}]}},{"type":"VariableStatement","declarations":[{"type":"VariableDeclaration","id":{"type":"IdentifierExpression","name":"a"},"init":{"type":"NumericLiteral","value":90}}]}]}}`,
  },
];
