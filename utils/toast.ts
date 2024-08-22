import { ErrorMsg } from "constants/types";
import { toast } from "react-toastify";

export const toastSuccess = (message: string): void => {
  if (message) {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-succes",
    });
  }
};

export const toastError = (error: ErrorMsg) => {
  let toastData: string | string[] = "";

  if (typeof error === "string" || (error && error instanceof Array)) {
    toastData = error;
  } else if (typeof error === "object" && error.message) {
    toastData = error.message;
  }

  if (toastData && typeof toastData === "string" && toastData !== "") {
    toast.error(toastData, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (toastData && toastData instanceof Array) {
    toastData.forEach((err) => {
      toastError(err);
    });
  }
};
