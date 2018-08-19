const bodyParser = require('body-parser')
const route = require('express').Router();

route.use('/users', require('./users'));
route.use('/products', require('./products'));

exports = module.exports={

	route
}