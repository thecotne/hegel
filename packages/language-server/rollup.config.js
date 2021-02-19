import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import builtinModules from 'builtin-modules';

export default {
  input: 'src/server.js',
  output: {
    format: 'cjs',
    file: 'build/server.js'
  },
  external: [...builtinModules, "vscode"],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ],
};
