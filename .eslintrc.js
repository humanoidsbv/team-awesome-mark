module.exports = {
  extends: ["@humanoids/eslint-config", "plugin:storybook/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
  },
};
