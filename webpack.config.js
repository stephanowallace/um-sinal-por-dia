const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = {
  historyApiFallback: true,
  port: 3000,
};

const output = {
  publicPath: '/',
  chunkFilename: '[name].[chunkhash].bundle.js',
};

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: { loader: 'babel-loader' },
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64]',
          sourceMap: true
        },
      },
    ],
  },
];

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  })
];

module.exports = {
  devServer,
  module: { rules },
  output,
  plugins
};
