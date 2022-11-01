// module.exports = {
//   plugins: [
//     [
//       'postcss-preset-env',
//       {
//         // 其他选项
        
//       },
//     ],
//   ],
// };

module.exports = (api) => {

  return {
    // 你可以指定下面提到的所有选项 https://postcss.org/api/#processoptions
    plugins: [
      // PostCSS 插件
      'postcss-preset-env',
      // ['postcss-pxtorem',{
      //   rootValue: 16, // html节点fontsize
      //   exclude: /node_modules/i
      // }],
      ['postcss-px-to-viewport',{ // https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
        viewportWidth: 375,
        exclude: /node_modules/i,
      }]
    ],
  };
};