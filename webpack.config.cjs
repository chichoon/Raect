const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const currentMode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: { index: './src/TestClient/index.ts' }, // 진입점 (1개)
  output: {
    path: path.resolve(__dirname, '/dist'), // 번들링 파일 저장 폴더
    filename: 'bundle.js', // 번들링 파일 이름
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // SASS 로더
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin()],
  mode: currentMode,
  devServer: {
    static: { directory: path.resolve(__dirname, '/dist') },
    compress: true,
    port: 9000,
    open: true,
    host: 'localhost',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    alias: {
      '@raect': path.resolve(__dirname, '/src/Raect'),
      '@test': path.resolve(__dirname, '/src/TestClient'),
    },
  },
};
