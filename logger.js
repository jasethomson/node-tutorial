var url = 'http://mylogger.io/log';

function log(message){
  // send HTTP request
  //for now just log message
  console.log(message);
}

//export function
module.exports.log = log;

//export url with diff. variable name
// module.exports.endPoint = url;
