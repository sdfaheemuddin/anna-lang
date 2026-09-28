export default class KaliPointerException extends Error {
  constructor(errorMessage: string) {
    const errorName = "KaliPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
