exports.install = (Vue, options) => {
  console.log(options)
  Vue.prototype.$ajax = () => {
    console.log('我是ajax')
  }
}
