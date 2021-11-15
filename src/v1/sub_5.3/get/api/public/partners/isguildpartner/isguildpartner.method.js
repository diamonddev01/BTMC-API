// The old partners system. This code is still accessable however is not recomended for use.
// This system will be overhauled in v2 to work again and use the bot as the calculator for this data.

const partners = ['852227959767040060']

module.exports = async function (req, res, path) {
  const guild = req.query.guild || undefined;
  if(!guild) res.sendStatus(400);
  if(guild) {
    if(partners.includes(guild.toString())) {
      res.end("true");
    } else {
      res.end("false");
    }
  }
}