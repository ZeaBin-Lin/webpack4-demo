const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // development不压缩代码
  entry: {
    app: path.join(__dirname, './src/app.js'), // 当前目录
    print: path.join(__dirname, './src/print.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist') // 运行时目录
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(eot|ttf|woff|otf|woff2)/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ // 未指定html，自动生成index.html
      title: 'output Management'
    })
  ]
}