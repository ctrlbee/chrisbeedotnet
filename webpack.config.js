module.exports = {
  entry: [
    './src-client/js/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist-client/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-2']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './dist-client'
  }
};
