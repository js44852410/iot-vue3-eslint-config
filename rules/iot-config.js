module.exports = {
  rules: {
    // 禁止对函数参数再赋值
    'no-param-reassign': 'off',

    // 通过确保将块语句包装在花括号中来防止错误并提高代码清晰度
    curly: ['error', 'all'],

    // 参数有默认值的参数放在最后
    'default-param-last': 'error',

    // 强制全等
    eqeqeq: 'error',

    // 防止使用for in循环而不过滤循环中的结果时可能出现的意外行为
    'guard-for-in': 'error',

    // 禁止在构造函数中返回值
    'no-constructor-return': 'error',

    // 突出显示if包含 return 语句后的不必要代码块
    'no-else-return': 'warn',

    // 不允许在顶级脚本作用域中声明var并命名function声明
    'no-implicit-globals': 'error',

     // 标记this类或类类对象之外的关键字的用法
    'no-invalid-this': 'warn',

    // 禁止使用new不将结果对象分配给变量的关键字的构造函数调用
    'no-new': 'warn',

    // 循环中条件未修改
    'no-unmodified-loop-condition': 'error',

    // 禁止没有await表达式的异步函数
    'require-await': 'warn',

    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 'error',

    // 不允许console
    'no-console': 'off',

    // 不允许使用常量做判断
    'no-constant-condition': 'error',

    // 不允许同一if-else-if链中出现重复条件
    'no-dupe-else-if': 'error',

    // 禁止不必要的括号
    'no-extra-parens': 'error',

    // 禁止给导入的参数重新赋值
    'no-import-assign': 'error',

    // 禁止丢失精度的数字文字（无精度损失）
    'no-loss-of-precision': 'warn',

    // 不允许从 Promise 执行器函数返回值
    'no-promise-executor-return': 'error',

    // 禁止从 setter 返回值
    'no-setter-return': 'error',

    // 禁止循环体只允许一次迭代
    'no-unreachable-loop': 'error',

    // 禁止不必要地使用计算属性键
    'no-useless-computed-key': 'warn',

    // 使用模板文字而不是字符串连接
    'prefer-template': 'warn',

    // 强制jsx中使用双引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 强制多行注释的特定样式（不允许连续的行注释而支持块注释。此外，要求块注释*在每行之前有一个对齐的字符）
    'multiline-comment-style': 'error',

    // 在三元表达式的操作数之间保持一致的换行
    'multiline-ternary': ["error", "always-multiline"],

    // 禁止否定条件
    'no-negated-condition': 'error',

    // 要求使用分号
    semi: ['error', 'always'],

    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],

     'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        mjs: 'never',
        jsx: 'never',
        vue: 'never'
      },
    ],

    // 强制每行的最大属性数
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],

    // 自定义组件无内容强制自关闭
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],

    // 强制属性顺序
    'vue/attributes-order': ['error', {
      order: [
        'GLOBAL',
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
    }]
  },
};
