/**
 * @module utils/alerts
 */

// Internal dependencies
import { log } from "./constants.mjs";

import {
  symError,
  symInfo,
  symNote,
  symSuccess,
  symWarning,
} from "./symbols.mjs";

import {
  blue,
  blueI,
  green,
  greenI,
  orange,
  orangeI,
  redB,
  redBI,
  yellow,
  yellowI,
} from "./colors.mjs";

// Alerts
export const errorAlert = (msg) =>
  log(`\n${symError} ${redBI(` ERROR `)} ${redB(msg)}\n`);

export const infoAlert = (msg) =>
  log(`\n${symInfo} ${blueI(` INFO `)} ${blue(msg)}\n`);

export const noteAlert = (msg) =>
  log(`\n${symNote} ${yellowI(` NOTE `)} ${yellow(msg)}\n`);

export const successAlert = (msg) =>
  log(`\n${symSuccess} ${greenI(` SUCCESS `)} ${green(msg)}\n`);

export const warningAlert = (msg) =>
  log(`\n${symWarning} ${orangeI(` WARNING `)} ${orange(msg)}\n`);
