import eslint from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import eslintPluginAstro from "eslint-plugin-astro"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [
      "**/public",
      "**/dist",
      "**/dist/*",
      "**/tests/*",
      "coverage",
      ".astro/*",
      "node_modules/*",
      "**/__generated__/*",
      ".gitignore",
    ],
  },
  eslint.configs.recommended,
  eslintConfigPrettier,
  tseslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    rules: {
      "no-undef": "off",
    },
  },
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-undef": "off",
    },
  }
)
