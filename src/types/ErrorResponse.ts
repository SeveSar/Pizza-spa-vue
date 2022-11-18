export default interface ErrorResponse {
  message: string;
  status: number;
  error: boolean;
}

export function isError(object: unknown): object is ErrorResponse {
  return (
    object instanceof Object &&
    object !== null &&
    Object.prototype.hasOwnProperty.call(object, "error") &&
    Object.prototype.hasOwnProperty.call(object, "status") &&
    Object.prototype.hasOwnProperty.call(object, "message")
  );
}
