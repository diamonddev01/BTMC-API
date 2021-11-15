// Slightly newer and better version of the guildpartner system. Yes its in use, no im not proud of it, no it wont return anything.
// As with most other code, will be overhauled in v2

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