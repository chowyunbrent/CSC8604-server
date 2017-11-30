const net = require('net');
const readline = require('readline');
let server = net.createServer(function (socket) {
    let rl = readline.createInterface(socket, null);
    rl.on('line', function (line) {
        if (line == '') {
            socket.write("HTTP/1.0 200 OK\r\n");
			socket.write("\r\n");
			socket.write("Hello world!\r\n");
            socket.end();
        } else {
            console.log('RECEIVED: ' + line);
            socket.write("You said: " + line + "\n");
        }

    });
}).listen(1337);
console.log("Running...");
