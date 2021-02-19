import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import builtinModules from 'builtin-modules';

export default {
  input: 'src/client/client.js',
  output: {
    format: 'cjs',
    file: 'build/client.js',
  },
  external: [
    ...builtinModules,
    'vscode'
  ],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
};
