/**
 * @module utils/symbols
 */

// External dependencies
import figures from "figures";

// Internal dependencies
import { blue, green, orange, red, yellow } from "./colors.mjs";

// Symbols
export const symError = red(figures.cross);
export const symInfo = blue(figures.info);
export const symSuccess = green(figures.tick);
export const symWarning = orange(figures.warning);
export const symNote = yellow(figures.star);
