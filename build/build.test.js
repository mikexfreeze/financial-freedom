/**
 * Created by Micheal Xiao on 2018/2/2.
 */
'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'test'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.test.conf')
const upload = require('./upload')
// import upload from './upload'
const spinner = ora('building for test...')
spinner.start()

rm(path.join(path.resolve(__dirname, '../dist-test'), config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
    let uploadOpt = {
      host:'106.75.14.226',
      username:'ubuntu',
      path: path.resolve(__dirname, '../dist-test'),
      password: 'arvato16!piwik',
      remoteDir: '/home/ubuntu/benefit_open/front_mobile/dist',
    }
    upload(uploadOpt)
  })
})
