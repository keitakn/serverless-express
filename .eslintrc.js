module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaVersion": 2019
  },
  rules: {
    "no-console": 0,
    "no-unused-vars": 0,
    "no-undef": 0,

    // prettier
    'prettier/prettier': [
      'error', {
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false
      }
    ]
  },
  settings: {
    node: {
      tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
    }
  }
};
