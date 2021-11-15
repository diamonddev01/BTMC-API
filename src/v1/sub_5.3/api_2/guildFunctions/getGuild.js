//This code will be getting a guild object from the server once this feature is compelted. As of current this wont work/load.
//This will be reintroduced in api v2

const https = require('https')

module.exports = async (req, res, path, meta) => {
  https.get(`https://btmc.repl.co/service/apicallback/${meta[0]}/ispartner`, (res2)=>{
    res2.on('data', (d) => {
      res.end(d.toString());
    })
  }).on('error', (e) => {
    res.end(e);
  })
}