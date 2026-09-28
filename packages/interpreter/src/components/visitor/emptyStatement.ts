import Visitor from ".";
import { ASTNode } from "anna-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
