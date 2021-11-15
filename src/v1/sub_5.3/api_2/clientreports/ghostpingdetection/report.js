const https = require('https');

/*

Note:
This code is not used on the main version of BTMC api.
It may be readded in v2 however the function is no longer needed and didnt work well.

*/

module.exports = async (req, res, path, meta) => {
  https.get(`https://btmc.repl.co/service/reports/ghostpingreport/${meta[0]}/${meta[1]}/${meta[2]}`, (res2)=>{
    res.sendStatus(res2.statusCode);
  }).on('error', (e) => {
    //res.end(e.toString());
    res.sendStatus(500)
  })
}