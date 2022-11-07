export default interface ErrorResponse {
  message?: string;
  status?: number;
  error: boolean;
}

export function isError(object: unknown): object is ErrorResponse {
  return (
    typeof object === "object" &&
    object !== null &&
    "error" in object &&
    object.error === true
  );
}
