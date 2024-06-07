import failed from "../../helpers/FailedAlert";
import success from "../../helpers/sendAlert";

/**
 * Validates an email input and updates its status.
 *
 * This function checks whether the provided input element's value meets basic email format criteria.
 * Specifically, it verifies that the value contains an "@" symbol, a dot ("."),
 * and the substring "com". If the value meets these criteria, the function calls
 * the `success` function with the input as the argument. Otherwise, it calls the `failed` function with the input as the argument.
 *
 * @function emailValidation
 * @param {HTMLInputElement} input - The input element to be validated.
 * @returns {void}
 */

function emailValidation(input: HTMLInputElement): void {
  if (
    input.value.includes("@") &&
    input.value.includes(".") &&
    input.value.includes("com")
  ) {
    success(input);
  } else {
    failed(input);
  }
}

export default emailValidation;
