/*
 * @Author: Lee
 * @Date: 2023-06-06 23:04:50
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-06 23:05:53
 * @Description: 
 */
export default {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ],
};
