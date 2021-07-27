/**
 * @file Stylelint 配置文件
 * stylelint 规则集：https://stylelint.io/user-guide/rules
 * stylelint-config-standard 扩展规则集：https://github.com/stylelint/stylelint-config-standard
 */
module.exports = {
    extends: 'stylelint-config-standard',
    syntax: 'scss',
    plugins: ['stylelint-scss'],
    rules: {
        // 颜色值避免直接使用颜色名
        'color-named': [
            'never',
            {
                ignore: ['inside-function']
            }
        ],
        // 颜色值小写
        'color-hex-case': 'lower',
        // 注释前无须空行
        'comment-empty-line-before': 'never',
        // 使用数字或命名的 (可能的情况下) font-weight 值
        'font-weight-notation': null,
        // 在函数的逗号之后要求有一个换行符或禁止有空白
        'function-comma-newline-after': null,
        // 在函数的括号内要求有一个换行符或禁止有空白
        'function-parentheses-newline-inside': null,
        // url使用引号
        'function-url-quotes': 'always',
        // 要求小于 1 的小数的前导 0
        'number-leading-zero': 'always',
        // 字符串使用单引号
        'string-quotes': 'single',
        // 要求选择器列表的逗号之前有一个换行符
        'selector-list-comma-newline-before': 'never-multi-line',
        // 在媒体查询的逗号之前禁止有一换行
        'media-query-list-comma-newline-before': 'never-multi-line',
        // 缩进
        indentation: 4,
        // 禁止低优先级的选择器出现在高优先级的选择器之后
        'no-descending-specificity': null,
        // 禁止空源
        'no-empty-source': null,
        // 禁止缺少文件末尾的换行符
        'no-missing-end-of-source-newline': null,
        // 多个属性值时，逗号如何放置
        'value-list-comma-newline-after': null,
        'declaration-colon-newline-after': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ]
    }
};
