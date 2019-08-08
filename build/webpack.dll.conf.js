const path = require("path")
const webpack = require("webpack")

// var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 提取css
// var AssetsPlugin = require('assets-webpack-plugin'); // 生成文件名，配合HtmlWebpackPlugin增加打包后dll的缓存
const vendors = [
    'vue/dist/vue.esm.js',
    'vue-router',
    'vue-cookie',
    'vuex',
    "iview",
]
module.exports = {
  // 你想要打包的模块的数组
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, '../static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    // 压缩打包的文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}