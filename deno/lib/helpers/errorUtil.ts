export namespace errorUtil {
  export type ErrMessage = string | { message?: string } | (() => string);
  export const errToObj = (message?: ErrMessage) =>
    typeof message === "function"
      ? { message: message() }
      : typeof message === "string"
      ? { message }
      : message || {};
  export const toString = (message?: ErrMessage): string | undefined =>
    typeof message === "function"
      ? message()
      : typeof message === "string"
      ? message
      : message?.message;
}
