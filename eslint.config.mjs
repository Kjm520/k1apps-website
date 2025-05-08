import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export default defineConfig([
	{ files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
	{ files: ["**/*.js"], languageOptions: { sourceType: "script" } },
	{ files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
	{ files: ["**/*.html"], plugins: { html } },

  {
    // recommended configuration included in the plugin
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html,
    },
    languageOptions: {
      parser: htmlParser,
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/indent": ["error", "tab"],
    },
  },



]);
