import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

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
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            "react-hooks": eslintPluginReactHooks,
            "react-refresh": eslintPluginReactRefresh,
        },
        extends: [
            eslintPluginReact.configs.flat.recommended,
            eslintPluginReact.configs.flat["jsx-runtime"],
        ],
        rules: {
            ...eslintPluginReactHooks.configs.recommended.rules,
            ...eslintPluginReactRefresh.configs.vite.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    },
    {
        ...mdx.flat,
        processor: mdx.createRemarkProcessor({
            lintCodeBlocks: true,
        }),
    },
    {
        ...mdx.flatCodeBlocks,
        rules: {
            ...mdx.flatCodeBlocks.rules,
            "no-var": "error",
            "prefer-const": "error",
            "no-undef": "off",
        },
    }
);
