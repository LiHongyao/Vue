import { defineConfig } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';

export default defineConfig({
  input: 'src/index.js',
  output: {
    file: 'dist/vue.js',
    format: 'umd',
    name: 'Vue',
    sourcemap: true,
  },
  plugins: [
    babel({
      extensions: ['.js'], // 需要转译的文件扩展名
      exclude: 'node_modules/**',
      babelHelpers: 'bundled', // 使用集成的 babel-helpers
    }),
    serve({
      port: 3000,
      contentBase: '', // 空字符串表示当前目录
      openPage: '/index.html',
    }),
  ],
});
