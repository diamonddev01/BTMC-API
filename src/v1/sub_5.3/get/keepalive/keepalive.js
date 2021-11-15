// The stuff to keep the bot running in the old days, removed now we have a good host.

const https = require('https')

module.exports = async (req, res, path, meta) => {
  https.get(`https://btmc.repl.co/service/keepalive`, (res2)=>{
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