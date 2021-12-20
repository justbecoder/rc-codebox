/**
 * @file: description
 * @author: huxiaoshuai
 * @Date: 2021-12-20 17:35:05
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2021-12-20 21:45:45
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rc-codebox',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: '/rc-codebox/',
  base: '/rc-codebox/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/justbecoder/rc-codebox',
    },
  ],
  // more config: https://d.umijs.org/config
});
