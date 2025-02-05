/**
 * @module utils/callbacks
 */

import {
  errorAlert,
  infoAlert,
  // noteAlert,
  // successAlert,
  warningAlert,
} from "./alerts.mjs";

export function printCommandInfo(error, stdout, stderr) {
  if (error) {
    errorAlert(error.message);
    return;
  }

  if (stdout) {
    // infoAlert(stdout);
    console.log(stdout);
  }

  if (stderr) {
    warningAlert(stderr);
  }
}
