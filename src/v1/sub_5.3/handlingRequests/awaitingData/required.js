//never completed.

const db = require('quick.db');

module.exports = async function () {
  data = db.get(`requestedData`);
  return data;
}