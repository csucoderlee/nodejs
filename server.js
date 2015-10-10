var http = require("http");
var url = require("url");

function start() {
	http.createServer(function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("request for" + pathname + "received");
		response.writeHead(200,{"Content-Type": "text/plain"});
		response.write("hello world");
		response.end();
	}).listen(8888);
}

exports.start = start;  //用start函数封装所提供的功能，用export对象导出这个功能函数，供其他模块使用
