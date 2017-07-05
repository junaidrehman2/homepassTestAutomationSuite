var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if(process.env.SERVER == 'prod'){
	mongoose.connect(process.env.MONGODB_URI_PROD);
}else{
	mongoose.connect(process.env.MONGODB_URI_SANDBOX);
}


module.exports = {mongoose};

//export MONGODB_URI_SANDBOX=mongodb://user:hCObQC2SpNETMgY@ds057413-a0.mongolab.com:57413/sandbox-domain