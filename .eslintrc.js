module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "eslint-plugin-tsdoc", "prettier", "react-hooks", "react"],

    rules: {
        "prettier/prettier": "error",
        "tsdoc/syntax": "warn",
        "react/jsx-one-expression-per-line": 0,
        "import/no-unresolved": ["error", { ignore: ["^@"] }], // added for next.js paths from tsconfig.json
        "operator-linebreak": "warn",
        "no-use-before-define": ["off", 2, ["React"]],
        "react/jsx-wrap-multilines": 0,
        "implicit-arrow-linebreak": 0,
        "max-len": 0,
        "spaced-comment": 0,
        "object-curly-newline": 0,
        "react/jsx-filename-extension": "off",
        "import/extensions": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": 0,
        quotes: "off",
        indent: [
            "off",
            2,
            {
                ignoredNodes: ["TemplateLiteral"],
            },
        ],
        "comma-dangle": 0,
        "no-underscore-dangle": 0,
        "@typescript-eslint/no-unused-vars": "error",
        // "no-underscore-dangle": 0,
        // "react/display-name": "warn",
        // "react-hooks/rules-of-hooks": "warn",
        // "react-hooks/exhaustive-deps": "warn",
        // "react/jsx-one-expression-per-line": 0,
        // "template-curly-spacing": "off",
    },
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
    // plugins: ['jsdoc'],
    extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "airbnb"],
    overrides: [
        {
            files: ["*.tsx", "*.ts"],
            rules: {
                // "no-undef": 1,
                "react/prop-types": "off",
            },
        },
    ],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            // typescript: './tsconfig.json',
            node: {
                // paths: [".", "src", "components"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
