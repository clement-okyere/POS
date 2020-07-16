module.exports = {
  extends: ["standard", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  env: {
    jest: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "@typescript-eslint/no-use-before-define": "off", // Allows us to hoist variables and functions which I am a fan of, functions not variables that is.
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        // Prevents us from using any delimiter for interface properties.
        multiline: {
          delimiter: "none",
          requireLast: false,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/camelcase": ["error", { properties: "never" }],
    "@typescript-eslint/indent": "off",
    "no-unused-vars": "off",
    "node/no-unsupported-features/es-syntax": "off",
  },
};
