module.exports = {
  context: __dirname,

  entry: './app.js',

  output: {
    filename: 'app.js',
    path: './public'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.svg?$/,
        loader: 'file-loader'
      }
    ]
  }
};