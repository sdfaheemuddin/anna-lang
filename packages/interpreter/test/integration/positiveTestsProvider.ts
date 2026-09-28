export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi anna
      bye anna
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi anna
      bye anna
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi anna
      ;
      bye anna
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi anna
      ;
      ;
      ;;
      bye anna
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi anna
      {};
      bye anna
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi anna
      {
        anna idi a = 4;
      }
      bye anna
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi anna
      anna idi a, b, c;
      bye anna
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi anna
      anna idi a = 10, b = "crap";
      bye anna
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi anna
      anna idi a = 10, b = 5;
      bye anna
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi anna
      anna idi a = 7 + 90;
      bye anna
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi anna
      anna idi a = nijam;
      a = 4;
      bye anna
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi anna
      anna idi a = 2;
      a *= 4;
      bye anna
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi anna
      anna idi a = 2;
      (a + 4);
      bye anna
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi anna
      anna idi a = 2;
      (a + 4) * 10 + (5 - 4);
      bye anna
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi anna
      anna idi a = 2;
      (a * (4 + 8) + 10);
      bye anna
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x != 9) {
      x = 5;
      anna cheppu x;
    } kakapothe anna (x >= 9);
    bye anna;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi anna;
      anna idi a , b;
      a = b = 60;
      anna cheppu a, b;
      bye anna
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with kali and "==", should success`,
    input: `
      hi anna;
      anna idi a;
      okavela anna (a == kali) {
        anna cheppu a;
      }
      bye anna
    `,
    output: "kali",
  },
  {
    name: `binaryExpression print test with kali without any operator, should success`,
    input: `
      hi anna;
      anna idi a;
      okavela anna (a) {
        anna cheppu a;
      } kakapothe anna {
        anna cheppu "not kali";
      }
      bye anna
    `,
    output: "not kali",
  },
  {
    name: `binaryExpression print test - comparing kali with kali "==", should success`,
    input: `
      hi anna;
      okavela anna (kali == kali) {
        anna cheppu "hai kali";
      }
      bye anna
    `,
    output: "hai kali",
  },
  {
    name: `binaryExpression print test with comparing kali with var "a", should success`,
    input: `
      hi anna;
      anna idi a;
      okavela anna (kali == a) {
        anna cheppu "hai kali";
      }
      bye anna
    `,
    output: "hai kali",
  },
  {
    name: `binaryExpression print test with comparing kali with var "a" explicit initialization, should success`,
    input: `
      hi anna;
      anna idi a = kali;
      okavela anna (kali == a) {
        anna cheppu "hai kali";
      }
      bye anna
    `,
    output: "hai kali",
  },
  {
    name: `binaryExpression print test with comparing kali with string kali, should success`,
    input: `
      hi anna;
      anna idi a = kali;
      okavela anna ("kali" == a) {
        anna cheppu "hai kali";
      } kakapothe anna {
        anna cheppu "not kali";
      }
      bye anna
    `,
    output: "not kali",
  },
  {
    name: `binaryExpression print test with comparing kali with string kali, should success`,
    input: `
      hi anna;
      anna idi a = "kali";
      okavela anna (kali == a) {
        anna cheppu "hai kali";
      } kakapothe anna {
        anna cheppu "not kali";
      }
      bye anna
    `,
    output: "not kali",
  },
  {
    name: `binaryExpression print test with comparing kali with string null, should success`,
    input: `
      hi anna;
      anna idi a = "null";
      okavela anna (kali == a) {
        anna cheppu "hai kali";
      } kakapothe anna {
        anna cheppu "not kali";
      }
      bye anna
    `,
    output: "not kali",
  },
  {
    name: `binaryExpression print test with kali var "a" & "b" - 0, should success`,
    input: `
      hi anna;
      anna idi a;
      anna idi b;
      okavela anna (a == b) {
        anna cheppu "hai kali";
      } kakapothe anna {
        anna cheppu "nahi kali";
      }
      bye anna
    `,
    output: "hai kali",
  },
  {
    name: `binaryExpression print test with kali var "a" & "b" - 1, should success`,
    input: `
      hi anna;
      anna idi a;
      anna idi b = kali;
      okavela anna (a == b) {
        anna cheppu "hai kali";
      } kakapothe anna {
        anna cheppu "nahi kali";
      }
      bye anna
    `,
    output: "hai kali",
  },
  {
    name: `binaryExpression print test with kali var "a" & "b" -2, should success`,
    input: `
      hi anna;
      anna idi a;
      anna idi b = "kali";
      okavela anna (a == b) {
        anna cheppu "hai kali";
      } kakapothe anna {
        anna cheppu "nahi kali";
      }
      bye anna
    `,
    output: "nahi kali",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - nijam, should success`,
    input: `
      hi anna;
      anna idi a = nijam;
      okavela anna (nijam == a) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "hai nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - tappu, should success`,
    input: `
      hi anna;
      anna idi a = tappu;
      okavela anna (tappu == a) {
        anna cheppu "hai tappu";
      } kakapothe anna {
        anna cheppu "nahi tappu";
      }
      bye anna
    `,
    output: "hai tappu",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam with string nijam, should success`,
    input: `
      hi anna;
      anna idi a = "nijam";
      okavela anna (nijam == a) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "nahi nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam expression, should success`,
    input: `
      hi anna;
      anna idi a = 7;
      okavela anna (nijam == (a > 5)) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "hai nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam expression & string "nijam", should success`,
    input: `
      hi anna;
      anna idi a = 7;
      okavela anna ("nijam" == (a > 5)) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "nahi nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam expression & two expressions, should success`,
    input: `
      hi anna;
      anna idi a = nijam;
      okavela anna ("nijam" == (a == nijam)) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "nahi nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam expression -3, should success`,
    input: `
      hi anna;
      anna idi a = nijam;
      okavela anna ((a == nijam) == (a == nijam)) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "hai nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam expression - 4, should success`,
    input: `
      hi anna;
      anna idi a;
      okavela anna ((a == kali) == (a == nijam)) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "nahi nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam expression - 5, should success`,
    input: `
      hi anna;
      anna idi a;
      okavela anna ((a == kali) == (a == nijam)) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "nahi nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - nijam expression - 5, should success`,
    input: `
      hi anna;
      anna idi a;
      anna idi b = tappu;
      okavela anna (a == b) {
        anna cheppu "hai nijam";
      } kakapothe anna {
        anna cheppu "nahi nijam";
      }
      bye anna
    `,
    output: "nahi nijam",
  },
  {
    name: `binaryExpression print test with boolean expression - tappu variables comparison, should success`,
    input: `
      hi anna;
      anna idi a = tappu;
      anna idi b = tappu;
      okavela anna (a == b) {
        anna cheppu "hai tappu";
      } kakapothe anna {
        anna cheppu "nahi tappu";
      }
      bye anna
    `,
    output: "hai tappu",
  },
  {
    name: `binaryExpression print test with boolean expression - tappu variables comparison with string tappu, should success`,
    input: `
      hi anna;
      anna idi a = "tappu";
      anna idi b = tappu;
      okavela anna (a == b) {
        anna cheppu "hai tappu";
      } kakapothe anna {
        anna cheppu "nahi tappu";
      }
      bye anna
    `,
    output: "nahi tappu",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi anna
      anna idi a = 1.2, b = 2;
      anna cheppu a + b;
      bye anna
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi anna
      anna idi a = 1.2, b = 2.3;
      anna cheppu a + b;
      bye anna
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi anna;
      anna idi a = 2, b = 60;
      anna cheppu (a * (4 + 8) + 10), b;
      bye anna
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi anna;
      anna idi a = 2, b = 60;

      a = b + 3;
      anna cheppu a, b;
      bye anna
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi anna;
      anna cheppu "hello", nijam, tappu;
      bye anna
    `,
    output: "hello nijam tappu",
  },
  {
    name: "printStatement test with kali, should success",
    input: `
      hi anna;
      anna cheppu kali;
      bye anna;
    `,
    output: "kali",
  },
  {
    name: "printStatement test with kali as second parameter, should success",
    input: `
      hi anna;
      anna cheppu 10, kali;
      bye anna;
    `,
    output: "10 kali",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi anna;
      anna cheppu "hello" + "crap";
      bye anna;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including kali, should success",
    input: `
      hi anna;
      anna idi a = 70;
      anna cheppu 6*5, kali, "jamtara", a;
      bye anna;
    `,
    output: "30 kali jamtara 70",
  },
  {
    name: "printStatement test with kali variable, should success",
    input: `
      hi anna;
      anna idi a;
      anna cheppu a;
      bye anna;
    `,
    output: "kali",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi anna;
      anna cheppu "undefined";
      bye anna;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with kali variable, should success`,
    input: `
      hi anna;
      anna idi a;
      anna cheppu a;
      bye anna;
    `,
    output: "kali",
  },
  {
    name: `printStatement test with nijam variable, should success`,
    input: `
      hi anna;
      anna idi a = nijam;
      anna cheppu a;
      bye anna;
    `,
    output: "nijam",
  },
  {
    name: `printStatement test with tappu variable, should success`,
    input: `
      hi anna;
      anna idi a = tappu;
      anna cheppu a;
      bye anna;
    `,
    output: "tappu",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi anna;
      anna idi a;
      anna cheppu a = 90;
      bye anna;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi anna;
      anna cheppu 9 && 10;
      bye anna;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi anna;
      anna cheppu 9 || 10;
      bye anna;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi anna;
      anna cheppu tappu && nijam;
      bye anna;
    `,
    output: "tappu",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi anna;
    anna idi a = nijam;
    anna cheppu a && tappu;
    bye anna;
    `,
    output: "tappu",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi anna;
    anna idi a = nijam;
    anna cheppu a && nijam;
    bye anna;
    `,
    output: "nijam",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi anna;
      anna cheppu 9 == 10;
      bye anna;
    `,
    output: "tappu",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi anna;
      anna cheppu 9 != 10;
      bye anna;
    `,
    output: "nijam",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi anna;
      anna cheppu 9 || 10;
      bye anna;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi anna;
      anna cheppu tappu || nijam;
      bye anna;
    `,
    output: "nijam",
  },
  {
    name: `printStatement test with boolean nijam tappu and logical, should success`,
    input: `
      hi anna;
      anna cheppu nijam != 10;
      bye anna;
    `,
    output: "nijam",
  },
  {
    name: `printStatement test with boolean nijam and string "nijam", should success`,
    input: `
      hi anna;
      anna cheppu "nijam" == nijam;
      bye anna;
    `,
    output: "tappu",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi anna;
      anna idi a = 0;
      anna eppudu varaku (a < 1) {
        anna cheppu "bhai";
        a += 1;
      }
      bye anna;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi anna;
      anna eppudu varaku (nijam)
        chalu anna;
      anna cheppu "end";
      bye anna;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi anna;
      anna idi a = 0;
      anna eppudu varaku (a < 2) {
        anna eppudu varaku (nijam)
          chalu anna;
        anna cheppu "hello";
        okavela anna (nijam)
          chalu anna;
      }
      bye anna;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi anna;
      anna idi a = 0;
      anna eppudu varaku (a < 2) {
        anna cheppu "hello";
        okavela anna (nijam)
          chalu anna;
        chalu anna;
        chalu anna;
      }
      bye anna;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi anna
    okavela anna (nijam) {
      anna cheppu "bhai";
    }
    bye anna;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi anna
    okavela anna (nijam) {
      anna cheppu "nijam";
    } kakapothe anna {
      anna cheppu "tappu";
    }
    bye anna;
    `,
    output: "nijam",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi anna
    anna idi x = 9;
    okavela anna (x >= 9) {
      x = 5;
      anna cheppu x;
    } 
    bye anna;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi anna
    okavela anna (tappu) {
      anna cheppu "tappu";
    } lekapothe anna (nijam) {
      anna cheppu "nijam";
    }
    bye anna;
    `,
    output: "nijam",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi anna
    anna idi x = 10;
    okavela anna (x < 5) {
      anna cheppu "x < 5";
    } lekapothe anna (x < 8) {
      anna cheppu "x < 8";
    } lekapothe anna (x < 12) {
      anna cheppu "x < 12";
    } lekapothe anna (x < 15) {
      anna cheppu "x < 15";
    }
    bye anna;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi anna
    anna idi a = 15;
    okavela anna (a < 0) {
      anna cheppu "a < 0";
    } lekapothe anna (a > 0) {
      okavela anna (a < 10) {
        anna cheppu "a < 10";
      } lekapothe anna (a < 20) {
        anna cheppu "a < 20";
      }
    }
    bye anna
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi anna
    anna idi x = 15;
    okavela anna (x < 5) {
      anna cheppu "x < 5";
    } lekapothe anna (x < 8) {
      anna cheppu "x < 8";
    } lekapothe anna (x < 12) {
      anna cheppu "x < 12";
    } kakapothe anna {
      anna cheppu "x > 12";
    }
    bye anna;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with nijam tappu, should success`,
    input: `
        hi anna
        okavela anna (nijam && tappu) {
          anna cheppu "nijam";
        } kakapothe anna {
          anna cheppu "tappu";
        }
        bye anna;
      `,
    output: `tappu`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi anna
        anna cheppu 90 % 9;
        bye anna;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi anna
        anna cheppu 27 % 5;
        bye anna;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi anna
        anna cheppu 5 % 20;
        bye anna;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi anna;
      anna idi a = 5;
      anna idi step = 0;
      anna eppudu varaku (a > 0) {
        step += 1;
        okavela anna (a % 2 != 0){
          a -= 2;
          veredi chudu anna;
        }
        a -= 1;
      }
      anna cheppu step;
      bye anna;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi anna;
      anna idi a = 5;
      anna idi step = 0;
      anna eppudu varaku (a > 0) {
        step += 1;
        okavela anna (a % 2 == 0){
          a -= 2;
          veredi chudu anna;
        }
        a -= 1;
        veredi chudu anna;
        anna cheppu "oye oye oye.. yha tk nhi aana tha bhai";
      }
      anna cheppu step;
      bye anna;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi anna;
      anna idi a = 10;
      anna idi step = 0;
      anna eppudu varaku (a > 0) {
        okavela anna (a % 2 == 0){
          a -= 3;
          veredi chudu anna;
        }
        a -= 1;
        okavela anna (step == 1) veredi chudu anna
        step += 1;
      }
      anna cheppu step;
      bye anna;
    `,
    output: "1",
  },
];