import Visitor from ".";
import { ASTNode } from "anna-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import KaliPointerException from "../../exceptions/kaliPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class AssignmentExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left)
      throw new InvalidStateException(
        `left node not present while executing: ${node.type}`
      );

    let identifier = node.left.name;
    let value: unknown;
    const currentScope = InterpreterModule.getCurrentScope();

    if (node.right) {
      value = InterpreterModule.getVisitor(node.right.type).visitNode(
        node.right
      );
    }

    if (identifier && node.operator) {
      const left = currentScope.get(identifier);

      if (left === null && node.operator !== "=")
        throw new KaliPointerException(
          `Anna, kali cannot be used with "${node.operator}"`
        );

      if ((left === true || left === false) && node.operator !== "=")
        throw new RuntimeException(
          `Anna, boolean operands cannot be used with "${node.operator}"`
        );

      const newValue = getOperationValue(
        { left: currentScope.get(identifier), right: value },
        node.operator
      );
      currentScope.assign(identifier, newValue);

      return currentScope.get(identifier);
    }
  }
}
