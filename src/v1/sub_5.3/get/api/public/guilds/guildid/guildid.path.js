//Api routing, this will be seen in many places and doesnt do much. Will, like alot, be removed in v2

module.exports = async function (req, res, path, meta) {
  if(path.includes(`/api/public/guilds/${meta[0]}/prefix`)) require('./prefix/prefix.method.js')(req, res, path, meta);
  if(path.includes(`/api/public/guilds/${meta[0]}/ispartner`)) require('./ispartner/ispartner.method.js')(req, res, path, meta);
}