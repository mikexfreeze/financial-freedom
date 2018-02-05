/**
 * Created by Micheal Xiao on 2018/2/1.
 */
const path = require('path')
const fs = require('fs')
var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function() {
  // console.log('Client :: ready');

  // conn.sftp(function (err, sftp) {
  //   if(err) throw err;
  //   // sftp.fastPut('./dist/', '/home/ubuntu/benefit_open/front_mobile/dist', function(err) {
  //   sftp.fastPut(path.resolve(__dirname, '../dist/'), '/home/ubuntu/benefit_open/front_mobile/dist', function(err) {
  //     if (err) throw err;
  //   })
  // })
  // conn.sftp(function (err, sftp) {
  //   if(err) throw err;
  //   // sftp.fastPut('./dist/', '/home/ubuntu/benefit_open/front_mobile/dist', function(err) {
  //   sftp.fastGet('/home/ubuntu/benefit_open/front_mobile/dist/', './dist/', function(err) {
  //     if (err) throw err;
  //   })
  // })
  // conn.sftp(function(err, sftp) {
  //   if (err) throw err;
  //   sftp.readdir('/home/ubuntu/benefit_open/front_mobile/dist', function(err, list) {
  //     if (err) throw err;
  //     console.dir(list);
  //     conn.end();
  //   });
  // });
  conn.sftp(function (err, sftp) {
    if ( err ) {
      console.log( "Error, problem starting SFTP: %s", err );
      process.exit( 2 );
    }

    console.log( "- SFTP started" );

    // upload file
    var readStream = fs.createReadStream( "./dist/test.txt" );
    var writeStream = sftp.createWriteStream( "/home/ubuntu/benefit_open/front_mobile/dist/test.txt" );

    // what to do when transfer finishes
    writeStream.on(
      'close',
      function () {
        console.log( "- file transferred" );
        sftp.end();
        process.exit( 0 );
      }
    );

    // initiate transfer of file
    readStream.pipe( writeStream );
  })
}).connect({
  host: '106.75.14.226',
  port: 22,
  username: 'ubuntu',
  password: 'arvato16!piwik',
  // privateKey: require('fs').readFileSync('/here/is/my/key')
});