//NOTE:
//The api currently does *NOT* connect to the bot. Why? The current connection is not setup and will be changed with api v2, v2 will come with loads of new updates
//and you should wait for it to release before using the BTMC api or copying anything you see here.

port = 3600; // The port you want your code to run on, you can edit this if you wish
const requests = require('./handlingRequests/handler'); // The handler that takes all the requests and parses them, its not recomended to change this.
const express = require('express'); // This is our web hoster, if you want to use something else such as https servers then please read their docs and not use this code.
const app = express(); // The application

const startTime = Date.now(); // Used for uptime functions, if you dont want uptime functions feel free to remove

const getFuncHandle = require('./get/getFunction.path.js'); // This is for the new api system, its still indev and is not recommended to use nor delete.

app.use(express.urlencoded());
app.use(express.json());

// Controls the is partner
app.get('/api/public/partners/isguildpartner/', async function(req, res){
  getFuncHandle(req, res, '/api/public/partners/isguildpartner/')
})

// Returns the version of the api
app.get('/api/version/', async function (req, res){
  res.end('1.5.3');
})

// Get a guild prefix
// Will be token locked in v2 and therefor removed from the /public/ path
app.get('/api/public/guilds/:guildid/prefix', async function(req, res){
  if(!req.params.guildid || isNaN(req.params.guildid)) res.sendStatus(400);
  getFuncHandle(req, res, `/api/public/guilds/${req.params.guildid}/prefix`, [req.params.guildid])
})

// The 'new' partner path
// Will be token locked in v2 and therefor removed from the /public/ path
app.get('/api/public/guilds/:guildid/ispartner', async function(req, res){
  if(!req.params.guildid || isNaN(req.params.guildid)) res.sendStatus(400);
  getFuncHandle(req, res, `/api/public/guilds/${req.params.guildid}/ispartner`, [req.params.guildid])
})

// Returns the uptime using the startTime variable
app.get('/pau/uptime/', async function(req, res){
  res.end((Date.now() - startTime).toString());
})

// Some cool code to do ping times, can be complex to use if you want the times
app.get('/pau/ping/', async function(req, res){
  input = req.query.start || undefined;
  if(input) {
    res.end((Date.now() - input).toString());
  } else {
    res.end("True")
  }
})

// Gives the uptime in a human format
app.get('/pau/uptime/human/', async function(req, res){
  res.end((Date.now() - startTime).toString() + "ms");
})

// The nowplaying connection to our streamhost api
app.get('/xmas/nowplaying', async function(req, res){
  require('./xmas/nowplaying')(req, res, '/xmas/nowplaying', []);
})

// Redirect to BTMC api docs
app.get('/docs/', async function (request, response){
  response.redirect(`https://developers.btmc.dev/`);
})

// Redirect to BTMC api docs
app.get('/', async function (request, response){
  response.redirect('https://developers.btmc.dev/');
  response.end(`Hi, I think you are looking for https://developers.btmc.dev/ OR https://btmc.dev/`);
})

// An old feature no longer in use, you can delete this if you like
/*app.get('/reports/throughclient/ghostpingdetection/:guildid/:channelid/:messageid', async function(req, res){
  require('./api_2/clientreports/ghostpingdetection/report')(req, res, `/reports/throughclient/ghostpingdetection/${req.params.guildid}/${req.params.messageid}`, [req.params.guildid, req.params.channelid, req.params.guildid]);
})*/

// Gives a time till christmas, this endpoint is used for BTMC bot
app.get('/extras/timetillxmas', function(req, res){
  today = new Date();
    //console.log(today.getFullYear())
    var cmas=new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()==11 && today.getDate()>25) {
        cmas.setFullYear(cmas.getFullYear()+1); 
    }
    let totalSeconds = ((cmas.getTime()-today.getTime()) / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
  res.end(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`);
})

// Some extra connections for BTMC bot, if you dont understand what they do/dont want the feature, delete it
app.get('/extras/timetillxmas/close', function(req, res){
  today = new Date();
    //console.log(today.getFullYear())
    var cmas=new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()==11 && today.getDate()>25) {
        cmas.setFullYear(cmas.getFullYear()+1); 
    }
    let totalSeconds = ((cmas.getTime()-today.getTime()) / 1000);
    let days = Math.floor(totalSeconds / 86400);
    if(days < 60) res.end(true.toString());
    else res.end(false.toString())
})

// Allows us to get trafic 
app.listen(port, function () {
    console.log('app listening at port %s', port);
});
