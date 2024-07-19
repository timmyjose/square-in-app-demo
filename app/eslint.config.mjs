import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:import/warnings",
    "plugin:import/errors",
    "plugin:import/typescript",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        react: fixupPluginRules(react),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            __DEV__: "readonly",
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            typescript: {},
        },

        react: {
            version: "detect",
        },
    },

    rules: {
        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            varsIgnorePattern: "_.*",
        }],

        "no-use-before-define": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "space-before-function-paren": "off",
        "no-explicit-any": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/indent": ["error", 2],
        indent: "off",
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "never"],
        "import/no-named-as-default": "off",
        // https://github.com/eslint/eslint/issues/17953
        "import/namespace": "off",
        "import/no-unresolved": "off"
    },
    "ignores": [
      "node_modules/",
      "dist/",
      "build/",
      "**/vendor/*.js"
   ]
}]