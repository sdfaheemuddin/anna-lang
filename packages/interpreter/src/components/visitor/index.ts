import { ASTNode } from "anna-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
