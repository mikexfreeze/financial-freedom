/**
 * Created by Micheal Xiao on 2018/2/2.
 */
var SftpUpload = require('sftp-upload'),
  fs = require('fs'),
  path = require('path')

var options = {
    host:'106.75.14.226',
    username:'ubuntu',
    password: 'arvato16!piwik',
    path: path.resolve(__dirname, '../dist'),
    remoteDir: '/home/ubuntu/benefit_open/front_mobile/dist',
  };

module.exports = function (opt) {
  let options = opt
  if(!opt.path){
    options.path = path.resolve(__dirname, '../dist')
  }
  let sftp = new SftpUpload(options);
  sftp.on('error', function(err) {
    throw err;
  })
    .on('uploading', function(progress) {
      console.log('Uploading', progress.file);
      console.log(progress.percent+'% completed');
    })
    .on('completed', function() {
      console.log('Upload Completed');
    })
    .upload();
}