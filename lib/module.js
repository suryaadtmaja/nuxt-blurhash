const { resolve } = require('path')

module.exports = function(moduleOptions) {
  const defaultOptions = {
    components: {
      NuxtBlurhash: resolve(__dirname, './components/BlurHash.vue'),
      NuxtBlurImage: resolve(__dirname, './components/BlurHashImage.vue')
    }
  }

  const options = Object.assign(defaultOptions, moduleOptions)
  // const options = Object.assign(defaultOptions, _options)
  // const options = {
  //   ...this.options["nuxt-blur-hash"],
  //   ...moduleOptions,
  //   defaultOptions,
  // };

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-blur-hash.js',
    options
  })
}

module.exports.meta = require('../package.json')
