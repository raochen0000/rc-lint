module.exports = {
  plugins: ["react"],
  rules: {
    // 使用大驼峰风格命名组件
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
  },
};
