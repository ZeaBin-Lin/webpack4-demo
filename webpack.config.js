const path = require('path')

module.exports = {
  mode: 'development', // development不压缩代码
  entry: path.join(__dirname, './src/app.js'), // 当前目录
  output: {
    filename: 'bundle.js',
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
    
  ]
}