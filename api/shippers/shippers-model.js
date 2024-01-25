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
  const [shipper] = await db('shippers').where('shipperid', shipperId)
  //.where({ }) could take in an object with a bunch of key-value pairs but since we only have shipperid, this is fine
  //also wrapping shipper inside brackets makes it where when you log it out using httpie and an id doesn't exist its blank instead of an empty array apparently...
  //could also be done ike this:
  //const result = await db('shippers).where('shipperid', shipperId).first()
  return shipper
}

async function create(shipper) {
  const [shipperId] = await db('shippers').insert(shipper)
  //after filling out the neccessar info in httpie, we get back an array with an integer(the number 4 in my case) inside! [ 4 ]
  const result = await getById(shipperId)
  //after changing it to use getById in the function, now instead of outputing the shipperId, it now shows the nexly created shipper object!!
  return result
}

async function update(shipperId, changes) {
  await db('shippers').update(changes).where('shipperid', shipperId)
  const result = await getById(shipperId)
  return result
}

async function remove(shipperId) {
  const toBeDeleted = await getById(shipperId)
  await db('shippers').del().where('shipperid', shipperId)
  //when returning this we get a one(even though i deleted the shipper with shipperId 4! the number 1 is the number of ROWS AFFECTED! if I run this again I now get a 0!)
  //no it doesn't need to be saved in a variable
  return toBeDeleted;
}
