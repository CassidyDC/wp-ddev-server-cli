#!/usr/bin/env node

/**
 * DDEV Local WP Server CLI
 *
 * A simple CLI for configuring and setting up a local WordPress development server with DDEV.
 *
 * @author Jacob Cassidy <https://cassidydc.com>
 */

// Internal dependencies
import { header } from "./utils/header.mjs";

// Display the CLI header
header();

export default () => {
  console.log("Working");
};
