//Api routing, this will be seen in many places and doesnt do much. Will, like alot, be removed in v2

module.exports = async function (req, res, path) {
  if(path.includes("/api/public/partners/isguildpartner")) require('./isguildpartner/isguildpartner.method.js')(req, res, path);
}