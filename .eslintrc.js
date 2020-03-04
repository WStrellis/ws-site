module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "jsx-a11y"],
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
    rules: {
        "no-unused-vars": 0,
        "react/prop-types": 1,
    },
}
