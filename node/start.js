var sys = require('sys');
var exec = require('child_process').exec;
console.log('Running Bower + Gulp Tasks, wait until Site Load  ...  Press Crtl-C to Exit :) Boa Sorte!'); 
function puts(error, stdout, stderr) { sys.puts(stdout);}
console.log('Wait until Site Load');
exec("sh ./sh/start.sh", puts);
console.log('Press Crtl-C to Exit :) Boa Sorte!');