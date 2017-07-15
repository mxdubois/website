/**
 * This file allows you to customize how the app is built in development mode.
 * By default all we do is modify the entry point to include normalize.css and
 * font-awesome. Feel free to remove them if you don't want/need them.
 *
 * NOTE: This file is completely optional, but it's likely that you will want to
 * customize certain things about the build process at some point so it is
 * provided for you here. Furthermore, if you wish to completely opt-out of all
 * defaults you can simply not make use of the `config` passed in to the
 * function and return a full webpack config of your own making.
 */
module.exports = (config, apptime) => ({
  ...config,
  entry: {
    app: [
      'normalize.css',
      'font-awesome/css/font-awesome.css',
      apptime.hmrEntry,
      './client/index.js',
    ],
  },
})
