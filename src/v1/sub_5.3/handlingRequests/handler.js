// The oldest of all of our handlers.
// Some of this code has been in use for around 5-6 months. All of it cant be accessed due to changes to the api endpoints however I doubt any of it even works.

const isValidToken = require('../functions/isValidToken');

module.exports = async function (body) {
  if(!body.meta) return [false,400];

  if(body.meta == "validateToken") {
    sys = await isValidToken(body.token);
    return [true, sys];
  }

  if(!body.token) return [false, 401];
  sys_t1 = await isValidToken(body.token);
  sys_t2 = await isValidToken(body.token, true);

  if(!sys_t1) return [false, 401];

  type = body.meta;

  if(type == "request") {
    //
  } else if(type == "send") {
    if(!sys_t2) return [false, 401];
    //
  } else if(type == "awaiting") {
    if(!sys_t2) return [false, 401];
    //
  }
}