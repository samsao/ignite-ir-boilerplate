module.exports = {
  parser: "babel-eslint",

  extends: ["samsao-mobile"],

  settings: {
    "import/parser": "babel-eslint",
    "import/resolver": {
      "babel-module": {}
    }
  },
  globals: {
    $Keys: true
  },
  rules: {
    "no-console": "off",
    "import/no-commonjs": "off",
    "func-names": "off",
    
  }
};
