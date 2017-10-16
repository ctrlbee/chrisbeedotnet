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
    loaders: [
    {
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-2']
      }
    }, {
      test:'/\.css$/',
      use: [{
              loader: "style-loader"
            }, {
              loader: "css-loader"
            }, {
              loader: "sass-loader"
        }]
      }, { 
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
          loader: 'file-loader?name=fonts/[name].[ext]' 
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './dist-client',
    hot: true
  }
};
