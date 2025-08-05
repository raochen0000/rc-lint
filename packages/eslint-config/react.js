/* 
  自定义的 React lint 规则
*/
module.exports = {
  extends: ["./rules/react"],
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  rules: {
    // 不要声明重复的属性名
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
  },
};
