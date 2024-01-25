const db = require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  //This WORKS!! But is not the proper way...
  //const result = await db.raw('select * from shippers;')
  const result = await db('shippers')
  //if you're not interested in all the columns you could do this behind it for example:
  //.select('phone', 'shippername')
  return result
}

async function getById(shipperId) {
  //This, AGAIN, works but is not the right was to do this
  //const result = await db.raw('select * from shippers where shipperId = 1;')
  const result = await db('shippers').where('shipperid', shipperId)
  //.where({ }) could take in an object with a bunch of key-value pairs but since we only have shipperid, this is fine
  return result
}

async function create() {
  return 'create wired'
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
