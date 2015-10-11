function start(){
	console.log("request handler 'start' was called.");
}

function upload(){
	console.log("request handler 'upload' was called.");
}

exports.start = start;  //模块像外提供start方法
exports.upload = upload;
