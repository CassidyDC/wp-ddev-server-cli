/**
 * @module commands/install
 */

// Run `ddev config --project-type=wordpress --project-name=$PROJECT_NAME_SLUG`
// Create file: `.ddev/php/php-ray.ini`
// Create file: `.ddev/web-build/Dockerfile`
// Create file: `ray.php`
// Add WP debugging and development configurations post-start hook to `.ddev/config.yaml` file.
// Create `logs` directory
// Initialize Git.
// Add development configuration files from wp-dev-configs package.
//     - `.vscode/settings.json`
//     - `.vscode/extensions.json`
//     - `/patches/`
//     - `.gitignore`
//     - `composer.json`
//     - `phpcs.xml`
//     - `phpstan.neon`
//     - `package.json`
//     - `.editorconfig`
//     - `.markdownlint-cli2.jsonc`
//     - `.markdownlint.jsonc`
//     - `.prettierignore`
//     - `eslint.config.mjs`
//     - `prettier.config.mjs`
//     - `stylelint.config.mjs`
//     - `webpack.config.mjs`
//     - `README.md`
//     - `CHANGELOG.md`
//     - `LICENSE`
// 11. Run `ddev start`.
// 12. Download WordPress
// 13. Install WordPress without themes or plugins.
// 14. Install default WordPress theme.
// 15. Install and activate CassidyDC starter block theme.
// 16. Install All-In-One Migration plugin.
// 17. Install Query Monitor plugin.
// 18. Set WP permalinks to use '%%postname%%'.
// 19. Hide default WordPress dashboard widgets.
// 20. Hide default WordPress welcome panel.
// 21. Delete Hello World post.
// 22. Delete Sample Page.
// 23. Delete Privacy Policy draft page.
// 24. Create a 'Homepage' page and set it to be the sites front page.
// 25. Opening default browser to the WP Admin dashboard.

// External dependencies
import { exec } from "node:child_process";

// Internal dependencies
import { printCommandInfo } from "./utils/callbacks.mjs";

const projectSlug = "test-project";
const ddevConfig = `ddev config --project-type=wordpress --project-name=${projectSlug}`;

exec(ddevConfig, printCommandInfo);
