export default {
  input: 'src/index.js',
  acorn: {
    plugins: {
      classFields: true
    }
  },
  acornInjectPlugins: [
    require('acorn-class-fields')
  ],
  output: [
    {
      file: 'dist/galaxy-errors.esm.js',
      format: 'es'
    },
    {
      file: 'dist/galaxy-errors.js',
      name: 'GalaxyErrors',
      exports: 'named',
      format: 'umd'
    }
  ]
}
