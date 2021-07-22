const path = require('path')

module.exports = ({platform}) => ({
  mode: 'development',
  entry: './src/index.js',
  /* ... */
  resolve: {

    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.join(__dirname, 'node_modules/react-native'),
    }
  }
})