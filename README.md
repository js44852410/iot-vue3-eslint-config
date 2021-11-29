# iot-vue3-eslint-config

## 使用方法

1. 安装该配置文件

`npm install iot-vue3-eslint-config`

2. 在项目的`.eslintrc.js` 的 `extends`中添加配置

`.eslintrc.js`
```js
extends: [
    ...
    'iot-vue3-eslint-config'
]
```


## 规则详情

+ 可以对函数参数再赋值

'no-param-reassign'： 'off'

+ 将块语句包装在花括号中来防止错误并提高代码清晰度

curly: ['error', 'all']

错误示例：
```
if (a) return false
```
正确示例：
```
if (a) {
    return false;
}
```

+ 要求参数有默认值的参数放在最后

'default-param-last': 'error'

错误示例：
```
function fn(a = 'a', b) {}
```
正确示例：
```
function fn(b, a = 'a') {}
```

+ 强制全等比较

eqeqeq: 'error'

错误示例：
```
if (a == b) {}
```
正确示例：
```
if (a === b) {}
```

+ 防止使用for in循环而不过滤循环中的结果时可能出现的意外行为

'guard-for-in': 'error'

错误示例：
```
for (key in foo) {
   doSomething(key);
}
```

正确示例：
```
for (key in foo) {
    if (Object.prototype.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
```

+ 禁止在构造函数中返回值

'no-constructor-return': 'error'

错误示例：
```
class P {
    constructor() {
        return false
    }
}
```

+ 突出显示if包含 return 语句后的不必要代码块

'no-else-return': 'warn'

错误示例：
```
function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}
```
正确示例：
```
function foo() {
    if (x) {
        return y;
    }
     return z;
}
```

+ 不允许在顶级脚本作用域中声明var并命名function声明

'no-implicit-globals': 'error'

+ 禁止使用new不将结果对象分配给变量的关键字的构造函数调用

'no-new': 'warn'

错误示例：
```
new BScroll()
```
正确示例：
```
const bs = new BScroll()
```

+ 循环中条件未修改

'no-unmodified-loop-condition': 'error'

错误示例：
```
while (node) {
    doSomething(node);
}
```
正确示例：
```
while (node) {
    doSomething(node);
    node = node.parentNode;
}
```

+ 禁止没有await表达式的异步函数

'require-await': 'warn'

错误示例：
```
async function() {
    dosomething()
}
```
正确示例：
```
async function() {
    dosomething()
    await awaitFn()
}
```

+ 禁止在对象字面量中出现重复的键

'no-dupe-keys': 'error'

错误示例：
```
const obj = {
    a: 'a',
    a: 'b'
}
```
正确示例：
```
const obj = {
    b: 'a'
}
```

+ 允许console

'no-console': 'off',

+ 不允许使用常量做判断

'no-constant-condition': 'error'

错误示例：
```
if (true) {
    dosomething()
}
```

+ 不允许同一if-else-if链中出现重复条件

'no-dupe-else-if': 'error'

错误示例：
```
if (a) {
    b = 'b'
} else if (a) {
    b = 'c'
}
```
正确示例：
```
if (a) {
    b = 'b'
}
```

+ 禁止不必要的括号

'no-extra-parens': 'error'

错误示例：
```
const a = 10 + (5 / 10)
```
正确示例：
```
const a = 10 + 5 / 10
```

+ 禁止给导入的参数重新赋值

'no-import-assign': 'error'

+ 禁止丢失精度的数字文字（无精度损失）(警告)

'no-loss-of-precision': 'warn'

错误示例：
```
const x = 9007199254740993
const x = 5123000000000000000000000000001
const x = 1230000000000000000000000.0
const x = .1230000000000000000000000
const x = 0X20000000000001
const x = 0X2_000000000_0001
```

+ 不允许从 Promise 执行器函数返回值

'no-promise-executor-return': 'error'

错误示例：
```
new Promise(() => {
    return false
})
```

+ 禁止从 setter 返回值

'no-setter-return': 'error'

+ 禁止循环体只允许一次迭代

'no-unreachable-loop': 'error'

错误示例：
```
for (var i = 0; j < 10; i++) {
    dosomething()
    break
}
```
改用条件判断

+ 禁止不必要地使用计算属性键

'no-useless-computed-key': 'warn'

错误示例：
```
var a = { ['0']: 0 };
var a = { ['0+1,234']: 0 };
var a = { [0]: 0 };
var a = { ['x']: 0 };
var a = { ['x']() {} };
```
正确示例：
```
var c = { 'a': 0 };
var c = { 0: 0 };
var a = { x() {} };
var c = { a: 0 };
var c = { '0+1,234': 0 };
```

+ 使用模板文字而不是字符串连接

'prefer-template': 'warn'

+ 强制jsx中使用双引号

'jsx-quotes': ['error', 'prefer-double']

+ 强制多行注释的特定样式（不允许连续的行注释而支持块注释。此外，要求块注释*在每行之前有一个对齐的字符）

'multiline-comment-style': 'error'

错误示例：
```
// a
// b
// c
```
正确示例：
```
/**
* a
* b
* c
*/
```

+ 在三元表达式的操作数之间保持一致的换行

'multiline-ternary': ["error", "always-multiline"]

错误示例：
```
foo > bar ? value1 :
    value2;
```
正确示例：
```
foo > bar ? value1 : value2;

foo > bar
 ? value1
 : value2;
```

+ 禁止否定条件

'no-negated-condition': 'error'

错误示例：
```
if (!a) {
    doNotA()
} else {
    doA()
}
```
正确示例：
```
/**
if (a) {
    doA()
} else {
    doNotA()
}
*/
```

+ 要求使用分号

semi: ['error', 'always']

+ 句尾逗号，要求在对象、imports、exports多行时，最后一个属性后添加一个逗号

'comma-dangle': ['error', {
  arrays: 'never',
  objects: 'always-multiline',
  imports: 'always-multiline',
  exports: 'always-multiline',
  functions: 'never',
}],

+ 强制每行的最大属性数，最大1

'vue/max-attributes-per-line': ['error', {
  singleline: 1,
  multiline: {
    max: 1,
    allowFirstLine: false,
  },
}]

+ 自定义组件无内容强制自关闭

'vue/html-self-closing': ['error', {
  html: {
    void: 'always',
    normal: 'never',
    component: 'always',
  },
  svg: 'always',
  math: 'always',
}]

+ 强制属性顺序

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

+ v-model允许添加参数

'vue/no-v-model-argument': 'off'

+ template标签能使用key

'vue/no-v-for-template-key': 'off'

+ 一个template-root 中允许多个组件

'vue/no-multiple-template-root': 'off'
