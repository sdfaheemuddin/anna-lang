import AnnaLangModule from "./module/annaLangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default AnnaLangModule.getParser();
