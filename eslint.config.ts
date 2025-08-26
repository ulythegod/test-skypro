import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "simple-import-sort": simpleImportSort,
      "@stylistic": stylistic
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: "/"
      }
    },
    rules: {
      semi: ["warn",
        "always"],
      "react/prop-types": "off",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [["^react",
            "^@?\\w"],
          ["^@src(/.*|$)",
            "^@?\\w"],
          ["^[^.]"]]
        }
      ],
      "@stylistic/array-bracket-spacing": ["error",
        "never"],
      "@stylistic/arrow-spacing": "error",
      "comma-dangle": ["error",
        "never"],
      "@stylistic/computed-property-spacing": ["error",
        "never"],
      "@stylistic/indent": ["error",
        2],
      "@stylistic/jsx-indent": ["error",
        2],
      "@stylistic/max-len": ["error",
        { "code": 120 }],
      "@stylistic/quotes": ["error",
        "double"]
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
]);
