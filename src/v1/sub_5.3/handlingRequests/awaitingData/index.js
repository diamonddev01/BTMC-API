// Never ended up completed, to the point that alot of the basic data never got added.

const addToRequired = require('./addToRequired.js');
const provided = require('./provided.js');
const required = require('./required.js');

module.exports = async function (data) {
  if(!data) return undefined;
  if(!data.type) return undefined;
  if(data.type == "get_from_btmc") {
    if(!data.address || !data.item) return false;
    addToRequired({
      address: data.address,
      item: data.item
    })
  }
}