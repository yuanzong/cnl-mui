const typescript = require('@rollup/plugin-typescript');

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
  external: [
    'react',
    'react/jsx-runtime',
    '@mui/material',
    '@mui/icons-material',
  ],
};
