// The old code to get the prefix, this code is still accessible, it will only return errors at best.
// Once again this code will be overhauled for api v2 to work better.

const https = require('https')

module.exports = async (req, res, path, meta) => {
  https.get(`https://btmc.repl.co/service/apicallback/${meta[0]}/prefix`, (res2)=>{
    res2.on('data', (d) => {
      if(d.toString() == "false") {
        res.end('Invalid')
      } else {
        res.end(d.toString());
      }
    })
  }).on('error', (e) => {
    res.end(e);
  })
}