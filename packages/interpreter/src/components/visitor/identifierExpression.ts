import Visitor from ".";
import { ASTNode } from "anna-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class IdentifierExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.name) {
      throw new InvalidStateException(`Invalid node name for: ${node.type}`);
    }

    let value = InterpreterModule.getCurrentScope().get(node.name);

    if (value === null) value = "kali";
    else if (value === true) value = "nijam";
    else if (value === false) value = "tappu";

    return value;
  }
}
