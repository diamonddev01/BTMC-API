module.exports = async function (req, res, path, meta) {
  if(path.includes("/api/v2/")) {
    if(path.includes("/api/v2/getguild/")) require('./guildFunctions/getGuild.js')(req, res, path, meta)
  }
}

/*
This file is the controler for all further guilds and moves all the api trafic as it should be.
*/