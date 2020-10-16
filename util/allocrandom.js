let allocRandom;
try{
	allocRandom = require("crypto").randomBytes;
}catch(ex){
	allocRandom = function(len){
		const bytes = Buffer.alloc(len);
		crypto.getRandomValues(bytes);
		return bytes;
	}
}
module.exports = allocRandom;
