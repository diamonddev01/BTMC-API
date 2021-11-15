const https = require('https') // Make requests to wb servers

module.exports = async (req, res, path, meta) => {
  https.get(`https://btmc.repl.co/service/reports/ghostpingreport/${meta[0]}/${meta[1]}/${meta[2]}`, (res2)=>{
    res.sendStatus(res2.statusCode);
  }).on('error', (e) => {
    //res.end(e.toString());
    res.sendStatus(500)
  })
}
/*

This code is no longer in operation on the main API server and will return a 404 code.
It is here for rememberance purposes only

*/
