import { NodeType } from "../../../../constants/constants";
import AnnaLangModule from "../../../../module/annaLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return AnnaLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return AnnaLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return AnnaLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return AnnaLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return AnnaLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return AnnaLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return AnnaLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return AnnaLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return AnnaLangModule.getRelationalExpression();

      default:
        return AnnaLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
