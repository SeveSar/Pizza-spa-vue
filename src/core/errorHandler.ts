import { callNotification } from "@/utils/notice";
import type ErrorResponse from "@/types/ErrorResponse";
const errorsEnum = {
  EMAIL_EXISTS: "Пользователь с таким e-mail существует",
  EMAIL_NOT_FOUND: "Пользователь с таким e-mail не существует",
  INVALID_PASSWORD: "Пароль не верен",
  TOO_MANY_ATTEMPTS_TRY_LATER:
    "Вы сделали много попыток входа. Повторите позже",
  UNKNOWN_ERROR: "Unknown Error",
} as const;

function isKnownMessage(key: string): key is keyof typeof errorsEnum {
  return Object.keys(errorsEnum).includes(key);
}
export default function errorHandler(error: ErrorResponse) {
  const msgKey = error.message ? error.message : "UNKNOWN_ERROR";
  let errorMsg;
  if (isKnownMessage(msgKey)) {
    errorMsg = errorsEnum[msgKey];
  } else {
    errorMsg = msgKey;
  }
  callNotification("error", {
    title: "Error",
    text: errorMsg,
  });
}
