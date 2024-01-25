const db = require('../../data/db-config')

module.exports = {
  checkId,
  checkPayload,
}

async function checkId(req, res, next) {
  const shipper = await db('shippers').where('shipperid', req.params.id).first()
  if(!shipper){
    next({ status: 404, message: `That ID does't exist!`})
  } else {
    next()
  }
}

function checkPayload(req, res, next) {
  if(!req.body.Phone || !req.body.ShipperName){
    //remember, SQL doesn't really care about capitalization but JAVASCRIPT DOES!!!
    next({ status: 422, message: 'Phone and ShipperName required'})
  } else {
    next()
  }
}
