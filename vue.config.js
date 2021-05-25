const { resolve } = require("path")

const webpackCdnPlugin = require("webpack-cdn-plugin")

const isProduction = process.env.NODE_ENV == "production"
const isDevelopment = process.env.NODE_ENV == "development"

module.exports = {
  lintOnSave: "warning",
  productionSourceMap: false,
  devServer: {
    port: 8888,
    open: true,
  },

  // 对webpack的配置
  chainWebpack: (config) => {
    // 如果不是开发环境，就是用cdn的形式来引入文件
    if (isProduction) {
   /**     @see  */
      config.plugin("cdn").use(webpackCdnPlugin, [
        {
          modules: [
            {
              // 引入的文件名
              name: "vue",
              // 生成变量名
              var: "Vue",
              // 路径
              path: "dist/vue.runtime.min.js",
              // 生产环境的cdn
              prodUrl:
                "https://cdn.bootcss.com/:name/:version/vue.runtime.min.js",
            },
            {
              name: "vue-router",
              var: "VueRouter",
              path: "dist/vue-router.min.js",
              prodUrl: "https://cdn.bootcss.com/:name/3.1.3/vue-router.min.js",
            },
            {
              name: "vuex",
              var: "Vuex",
              path: "dist/vuex.min.js",
              prodUrl: "https://cdn.bootcss.com/:name/:version/vuex.min.js",
            },
            {
              name: "element-ui",
              var: "ELEMENT",
              path: "index.js",
              prodUrl: "https://cdn.bootcss.com/:name/:version/:path",
            },
            {
              name: "element-plus",
              var: "ELEMENT-PLUS",
              path: "index.js",
              prodUrl: "https://cdn.bootcss.com/:name/:version/:path",
            },
          ],
          publicPath: "/node_modules",
          optimize: true,
        },
      ])
    }
  },
}