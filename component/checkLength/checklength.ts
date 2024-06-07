import failed from "../../helpers/FailedAlert";
import success from "../../helpers/sendAlert";

/**
 * Validates the length of an input's value and updates its status.
 *
 * This function checks whether the value of the provided input element has a length greater than 0.
 * If the length is greater than 0, it calls the `success` function with the input as the argument.
 * Otherwise, it calls the `failed` function with the input as the argument.
 *
 * @function checkLength
 * @param {HTMLInputElement} input - The input element to be validated.
 * @returns {void}
 */

function checkLength(input: HTMLInputElement): void {
  if (input.value.length > 0) {
    success(input);
  } else {
    failed(input);
  }
}

export default checkLength;
