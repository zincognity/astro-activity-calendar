/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-astro-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        tabWidth: 2,
        parser: "astro",
      },
    },
    {
      files: "*.tsx",
      options: {
        tabWidth: 2,
        parser: "babel-ts",
      },
    },
    {
      files: "*.json",
      options: {
        tabWidth: 2,
        parser: "json",
      },
    },
    {
      files: "*.md",
      options: {
        tabWidth: 2,
        parser: "markdown",
      },
    },
  ],
  proseWrap: "always",
  semi: false,
  trailingComma: "es5",
  tailwindFunctions: ["tw", "twi", "twj", "tv", "cn", "clsx", "twMerge", "cva"],
};
