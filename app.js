const express = require('express');
const app = express();
var counter = 0;
var colourlist = { "red": [255, 0, 0], "green": [0, 255, 0], "blue": [0, 0, 255] };
var shopping = ['bread','milk'];

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/hello/:name', function (req, res) {
    res.send('Fuck off ' + req.params.name + '!');
});

app.get('/display/:message', function (req, res) {
    var color = [0,0,0]
    if (req.query && req.query.colour in colourlist) {
		
		color = colourlist[req.query.colour];
		}
	showMessage(res,req.params.message,0.1,color)

});

function showMessage(res,message,delay,color){
    res.write(message+'text-color:'+color);	
	}

app.get('/counter/', function (req, res) {
	counter += 1;
    res.send(counter.toString());
});

app.get('/list/', function (req, res) {
	res.send(shopping);
});

app.get('/list/add/:item', function (req, res) {
	shopping.push(req.params.item);
	res.send('You have added '+req.params.item+' to your list');
	
});

app.get('/list/remove/:item', function (req, res) {
	if (shopping.includes(req.params.item)){
		var index = shopping.indexOf(req.params.item);
		if (index > -1){
			shopping.splice(index,1);
			res.send('You have removed '+req.params.item+' from your list');
			}
		} else {
			res.send(req.params.item+' not found in list');
			}
			
});


app.listen(3000, function () {
    console.log('Started!');
});
