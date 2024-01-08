import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: './src/ts/index.ts',
  output: {
    file: './src/dist/bundle.js',
    format: 'iife',
    soucemaps: true,
  },
  plugins: [
    typescript(),
    terser()
  ]
};