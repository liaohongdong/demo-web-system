/*
 * @Author: hongdong.liao
 * @Date: 2021-01-06 10:37:07
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 17:30:28
 * @FilePath: /microDemo/demo-web/demo-web-system/vue.config.js
 */
const path = require('path')
const { VUE_APP_NAME: name, VUE_APP_BASE_DEVELOPMENT_PORT: port } = process.env

function resolve (dir) {
  return path.join(__dirname, dir)
}
const dev = process.env.NODE_ENV === 'development'
module.exports = {
  publicPath: dev ? `//localhost:${port}` : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: 'demo-web-system',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
