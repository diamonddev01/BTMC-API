//Api routing, this will be seen in many places and doesnt do much. Will, like alot, be removed in v2

module.exports = async function (req, res, path, meta) {
  if(path.includes("/api/")) require('./api/api.path.js')(req, res, path, meta);
}