//var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        /* if (instruction === '/exit') {
             process.stdout.write('Quitting app!\n');
             process.exit();
         } else if
         (instruction === '/version') {
             process.stdout.write('The system language: ' + process.env.LANG + '\nThe node version: ' + process.versions.node + '\n');
         }
         else {
             process.stderr.write('Wrong instruction!\n');
         }*/
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;

            case '/version':
                process.stdout.write('The system language: ' + process.env.LANG + '\nThe node version: ' + process.versions.node + '\n');
                break;

            case '/getOSinfo':
            OSinfo.print();
                //getOSinfo();
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});

/*function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var uptime = os.uptime();
    var userInfo = os.userInfo();

    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}*/