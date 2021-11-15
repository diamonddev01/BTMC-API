//This checks the token to make sure its a valid API key
//Just like much of the other v1 code it will be depreciated for v2

module.exports = function(token, w) {
  if(w) {
    const tokens0 = process.env['TOKENS_WRITE']
    tokens = tokens0.split('/-/')

    if(tokens.includes(token)) return true;
    else return false;
  }
    const tokens0 = process.env['TOKENS']
    tokens = tokens0.split('/-/')

    if(tokens.includes(token)) return true;
    else return false;
}