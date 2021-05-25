module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      registeredComponentsOnly: false,
      ignores: []
    }],
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-empty": "off",
    "no-unused-vars": "off",
    "no-useless-escape": "warn",
    "vue/no-template-shadow": "off",
    "vue/singleline-html-element-content-newline": "off",
    quotes: ["error", "double", {
      allowTemplateLiterals: true
    }],
    "vue/max-attributes-per-line": ["error", {
      singleline: 4,
      multiline: {
        max: 4,
        allowFirstLine: true
      }
    }],
    "vue/no-unused-vars": "warn",
    "vue/no-unused-components": "warn",
    "vue/require-v-for-key": "off",
    "vue/script-indent": ["error"],
    "vue/require-default-prop": "off",

    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "no-irregular-whitespace": "warn",
    "spaced-comment": "warn",
    "quote-props": ["warn", "as-needed"], 
    "switch-colon-spacing": "warn",
    "no-unneeded-ternary": "warn",
    "no-var": "warn",
    "prefer-arrow-callback": "warn",
    "arrow-spacing": "warn",
    "one-var": ["warn", "never"],
    "max-nested-callbacks": ["warn", {max: 3}],
    "no-lonely-if": "warn",
    "comma-spacing": "warn",
    "key-spacing": ["warn", { mode: "minimum" }],
    // 有时不使用 escape 反而可能引起误解
    // eg: /(\d{3}-)/
    "no-useless-escape": ["off"],
    // 允许在 vue html 模板中使用 <
    // eg: <span>{{ value < 1 }}</span>
    "vue/no-parsing-error": ["error", { "invalid-first-character-of-tag-name": false }],
    "max-len": ["error", { code: 200, ignoreUrls: true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }

}