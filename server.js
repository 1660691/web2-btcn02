var http = require('http');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT;

http.createServer(function (req,res){

	if(req.url == "/"){
		fs.readFile("index.html", "utf-8", function(err,html){
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
		});
	} else if(req.url.match("\.css$")){
		var cssPath = path.join(__dirname, req.url);
		var fileStream = fs.createReadStream(cssPath, "utf-8");
		res.writeHead(200, {"Content-Type": "text/css"});
		fileStream.pipe(res);

	} else if(req.url.match("\.jpg$")){
		var imgPath = path.join(__dirname, req.url);
		var fileStream = fs.createReadStream(imgPath);
		res.writeHead(200, {"Content-Type": "image/jpg"});
		fileStream.pipe(res);

	} else if(req.url.match("\.png$")){
		var imgPath = path.join(__dirname, req.url);
		var fileStream = fs.createReadStream(imgPath);
		res.writeHead(200, {"Content-Type": "image/png"});
		fileStream.pipe(res);

	} else if(req.url.match("\.ico$")){
		var imgPath = path.join(__dirname, req.url);
		var fileStream = fs.createReadStream(imgPath);
		res.writeHead(200, {"Content-Type": "image/ico"});
		fileStream.pipe(res);
	} else {
		res.writeHead(404, {"Content-Type": "text/html"});
		res.end("Page not found :(");
	}

}).listen(port); 