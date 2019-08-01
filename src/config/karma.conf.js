var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
      frameworks: ['mocha', 'chai'],
      basePath: '../..',
      files: [
          'test/**/*.spec.js'
      ],
      reporters: ['mocha'],
      preprocessors: {
        'test/**/*.spec.js': ['webpack', 'sourcemap']
      },
      webpack: webpackConfig,
      port: 9876,  // karma web server port
      colors: true,
      logLevel: config.LOG_WARN,
      browsers: ['ChromeHeadless', 'Firefox', 'FirefoxDeveloper', 'FirefoxNightly', 'IE'],
      autoWatch: true,
      concurrency: Infinity,
      customLaunchers: {
          FirefoxHeadless: {
              base: 'Firefox',
              flags: ['-headless'],
          },
      }
  })
}