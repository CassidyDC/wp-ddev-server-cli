/**
 * Test
 */

// Internal dependencies
import index from "./index.mjs";

import {
  errorAlert,
  infoAlert,
  noteAlert,
  successAlert,
  warningAlert,
} from "./utils/alerts.mjs";

// Run the index
index();

// Display the test alerts
errorAlert("This is an error message.");
infoAlert("This is an info message.");
noteAlert("This is an note message.");
successAlert("This is a success message.");
warningAlert("This is a warning message.");
