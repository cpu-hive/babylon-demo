import { defineConfig } from 'rollup'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
export default defineConfig({
  treeshake: 'recommended',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  input: './src/index.ts',
  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    typescript()
  ]
})