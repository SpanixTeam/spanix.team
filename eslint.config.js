const prettier = require('eslint-config-prettier');
const globals = require('globals');
const js = require('@eslint/js');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
	js.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	}
];
