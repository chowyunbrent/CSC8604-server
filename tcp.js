const net = require('net');
const readline = require('readline');
let server = net.createServer(function (socket) {
    let rl = readline.createInterface(socket, null);
    rl.on('line', function (line) {
        if (line == '') {
            socket.write("Bye!\n");
            socket.end();
        } else {
            console.log('RECEIVED: ' + line);
            socket.write("You said: " + line + "\n");
        }
    });
}).listen(1337);
console.log("Running...");
