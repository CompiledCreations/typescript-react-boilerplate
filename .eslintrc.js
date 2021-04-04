module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // Overwrite rules specified from the extended configs e.g.
    // "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
