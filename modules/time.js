var os = require('os');  
var colors = require('colors');

function getTime () {
    var uptime = os.uptime();
    var hour = Math.floor(uptime / 3600);
    var minute = Math.floor((uptime - hour * 3600)/ 60);
    var second = Math.floor(uptime - (hour*3600) - (minute*60));
    console.log('Uptime: ~'.green,uptime, 'seconds');
    console.log('Uptime: ~'.green, hour, 'hours ', minute, 'min ', second, 'seconds ');
}
exports.print = getTime;