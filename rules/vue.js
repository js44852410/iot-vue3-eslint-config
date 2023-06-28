module.exports = {
  rules: {
    /*
     * allow async-await
     * allow debugger during development
     */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false,
      },
    ],
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: [],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          "max": 1
        },
        multiline: {
          "max": 1
        }
      },
    ],
    'vue/name-property-casing': ['off'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false,
      },
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': ['error'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/this-in-template': ['error', 'never'],
    'vue/multi-word-component-names': 'off'
  },
};
