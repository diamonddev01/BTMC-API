// Still in use and works! Even allows you to contact the same code that SBB uses.
// This will be one of the few files left alone for the v2 overhaul.

const https = require('http')

module.exports = async (req, res, path, meta) => {
  https.get(`http://65.21.202.84:8105/currentsong?sid=1`, (res2)=>{
    res2.on('data', (d) => {
      output = d.toString()
      if(output.toLowerCase().startsWith('unknown')) {
        console.log(true)
        trol = output.split(' - ');
        console.log(trol)
        output = trol[1]
      }
      res.end(output);
    })
  }).on('error', (e) => {
    res.end(e);
  })
}