/**
 * @module utils/constants
 */

// External dependencies
import { readFile } from "fs/promises";

// Constants
export const log = console.log;

export const pkgJSON = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf-8"),
);
