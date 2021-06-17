module.exports = {
  chainWebpack: (config) => {
    config.module
    .rule('scss')
    .use('sass-loader')
    .tap((options) => ({ outputStyle: 'expanded', ...options}))
  }
}
console.log(111)