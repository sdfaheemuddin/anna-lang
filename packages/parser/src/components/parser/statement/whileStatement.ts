import Statement from ".";

import { TokenTypes } from "../../../constants/annaLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";


export default class WhileStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.ANNA_EPPUDU_VARAKU);

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

        const test = Expression.getExpressionImpl(
            NodeType.AssignmentExpression
            ).getExpression();

        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

        if (this._tokenExecutor.getLookahead() == null) {
            throw new SyntaxError(`Unexpected end of "anna eppudu varaku" statement`);
        }

        const body = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

        return {
            type: NodeType.WhileStatement,
            test,
            body
        };
    }

}