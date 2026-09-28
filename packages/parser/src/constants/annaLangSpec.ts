export const TokenTypes = {
  NULL_TYPE: null,

  HI_ANNA_TYPE: "hi anna",

  BYE_ANNA_TYPE: "bye anna",

  ANNA_CHEPPU_TYPE: "anna cheppu",

  ANNA_IDI_TYPE: "anna idi",

  OKAVELA_ANNA: "okavela anna",

  KAKAPOTHE_ANNA: "kakapothe anna",

  LEKAPOTHE_ANNA: "lekapothe anna",

  ANNA_EPPUDU_VARAKU: "anna eppudu varaku",

  CHALU_ANNA: "chalu anna",

  VEREDI_CHUDU_ANNA: "veredi chudu anna",

  KALI_TYPE: "kali",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bhi anna\b/, tokenType: TokenTypes.HI_ANNA_TYPE },
  { regex: /^\bbye anna\b/, tokenType: TokenTypes.BYE_ANNA_TYPE },
  { regex: /^\banna cheppu\b/, tokenType: TokenTypes.ANNA_CHEPPU_TYPE },
  { regex: /^\banna idi\b/, tokenType: TokenTypes.ANNA_IDI_TYPE },
  { regex: /^\bokavela anna\b/, tokenType: TokenTypes.OKAVELA_ANNA },
  { regex: /^\blekapothe anna\b/, tokenType: TokenTypes.LEKAPOTHE_ANNA },
  { regex: /^\bkakapothe anna\b/, tokenType: TokenTypes.KAKAPOTHE_ANNA },
  { regex: /^\bkali\b/, tokenType: TokenTypes.KALI_TYPE },
  { regex: /^\banna eppudu varaku\b/, tokenType: TokenTypes.ANNA_EPPUDU_VARAKU },
  { regex: /^\bchalu anna\b/, tokenType: TokenTypes.CHALU_ANNA },
  { regex: /^\bveredi chudu anna\b/, tokenType: TokenTypes.VEREDI_CHUDU_ANNA },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bnijam\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\btappu\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
