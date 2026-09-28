import { TokenTypes } from "../../../constants/annaLangSpec";
import AnnaLangModule from "../../../module/annaLangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.ANNA_CHEPPU_TYPE:
        return AnnaLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return AnnaLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return AnnaLangModule.getBlockStatement();

      case TokenTypes.ANNA_IDI_TYPE:
        return AnnaLangModule.getVariableStatement();

      case TokenTypes.OKAVELA_ANNA:
        return AnnaLangModule.getIfStatement();

      case TokenTypes.ANNA_EPPUDU_VARAKU:
        return AnnaLangModule.getWhileStatement();

      case TokenTypes.CHALU_ANNA:
        return AnnaLangModule.getBreakStatement();
      
      case TokenTypes.VEREDI_CHUDU_ANNA:
        return AnnaLangModule.getContinueStatement();

      default:
        return AnnaLangModule.getExpressionStatement();
    }
  }
}
