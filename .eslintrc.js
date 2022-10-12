module.exports = {
  extends: "@humanoids/eslint-config",

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
  },
};
