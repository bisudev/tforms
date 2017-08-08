module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Tforms',
      externals: {
        react: 'React'
      }
    }
  }
}
