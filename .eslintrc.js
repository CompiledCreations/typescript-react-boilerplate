module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: true
  },
  plugins: ["@typescript-eslint", "import", "jest"],
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:unicorn/recommended",
    "prettier"
  ],
  rules: {
    // Builtin rules
    "no-console": "warn",
    "max-classes-per-file": "error",
    "no-bitwise": "error",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-throw-literal": "error",
    "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true }],

    // Typescript rules
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "private-static-field",
          "protected-static-method",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],

    // Other plugin rules
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
        groups: [["builtin", "external"], "internal", "parent", "sibling", "index", "object"],
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {
            pattern: "*.svg",
            patternOptions: {
              matchBase: true
            },
            group: "object"
          }
        ]
      }
    ],
    "react/prop-types": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        whitelist: {
          Props: true,
          props: true
        }
      }
    ]
  }
};
