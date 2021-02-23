'use strict';
const path = require('path');
const webpack = require('webpack')
module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // 默认false不开启
  // mode: 'development',
  // watch: true,
  // // 只有开启了监听模式时，watchOptions才有意义
  // watchOptions: {
  //   // 不监听的文件或者文件夹，支持正则
  //   ignore: /node_modules/,
  //   // 监听到变化发生了会等 300ms 再去执行， 默认300ms
  //   aggregateTimeout: 300,
  //   // 判断文件是否发生变化是通过不听询问系统指定文件有没有发生变化实现的，默认每秒访问1000次
  //   poll: 1000
  // },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /.less$/,
        use: ['style-loader','css-loader','less-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
