import { TokenTypes } from "../../../../../constants/annaLangSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import AnnaLangModule from "../../../../../module/annaLangModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return AnnaLangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return AnnaLangModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return AnnaLangModule.getStringLiteral();

      case TokenTypes.KALI_TYPE:
        return AnnaLangModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
