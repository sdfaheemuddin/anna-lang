import Visitor from ".";
import { ASTNode } from "anna-lang-parser";

export default class NullLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
