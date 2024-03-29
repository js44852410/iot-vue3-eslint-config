module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/vue',
    './rules/vue3',
    './rules/iot-config'
  ].map(require.resolve),
  env: { // 环境配置
    es6: true, // 启用ES6的功能
    node: true, // Node.js全局变量和Node.js范围。
    browser: true, // 启用浏览器全局变量。
  },
  parserOptions: { // 解析器选项
    ecmaVersion: 6, // 指定你想要使用的 ECMAScript 版本
    sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    parser: 'babel-eslint', // 解析器，默认使用Espree
    ecmaFeatures: { // 指定要使用其他那些语言对象
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  plugins: [ // 插件
    'import',
  ],
  settings: { // 自定义规则
    "import/resolver": {
      "webpack": {
        "config": "node_modules/@vue/cli-service/webpack.config.js"
      }
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    "vue/script-indent": ["error", 2, { "baseIndent": 1 }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      }
    }
  ]
};
