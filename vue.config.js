module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        data: `
          @import "src/styles/helpers.scss";
        `
      }
    }
  }
}
