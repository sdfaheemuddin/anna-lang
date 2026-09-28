import Visitor from ".";
import { ASTNode, NodeType } from "anna-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import KaliPointerException from "../../exceptions/kaliPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    let left, right;

    // handling logical & binary both at the same place as both operate on two operands
    if (node.type == NodeType.BinaryExpression) {
      if (node.operator !== "==" && node.operator !== "!=") {
        this._checkKali(node);
        this._checkBoolean(node);
      } 
      left = this._getNodeValue(node.left);
      right = this._getNodeValue(node.right);
    } else if (node.type == NodeType.LogicalExpression) {
      this._checkKali(node);

      left = node.left.type == NodeType.BooleanLiteral ? (node.left.value == "nijam" ? true : false) : InterpreterModule.getVisitor(node.left.type).visitNode(
        node.left
      );

      right = node.right.type == NodeType.BooleanLiteral ? (node.right.value == "nijam" ? true : false) : InterpreterModule.getVisitor(node.right.type).visitNode(
        node.right
      );

    }
    return getOperationValue({ left, right }, node.operator);
  }

  private _checkKali(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const kaliException = new KaliPointerException(
      `Anna, kali cannot be used with "${node.operator}"`
    );

    if (
      node.left.type === NodeType.NullLiteral ||
      node.right.type === NodeType.NullLiteral
    )
      throw kaliException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === null) throw kaliException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === null) throw kaliException;
    }
  }

  private _checkBoolean(node: ASTNode) {

    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const runtimeException = new RuntimeException(
      `Anna, boolean operands cannot be used with "${node.operator}"`
    );

    if (
      node.left.type === NodeType.BooleanLiteral ||
      node.right.type === NodeType.BooleanLiteral
    )
      throw runtimeException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === true || value === false) throw runtimeException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === true || value === false) throw runtimeException;
    }
  }

  private _getNodeValue(node: ASTNode) {

    if (node.type === NodeType.NullLiteral)
      return null;

    if (node.type === NodeType.BooleanLiteral) {
      return node.value === "nijam" ? true : false;
    }

    if (node.type === NodeType.IdentifierExpression && node.name)
      return InterpreterModule.getCurrentScope().get(node.name);

    return InterpreterModule.getVisitor(node.type).visitNode(
      node
    );
  }

}
