const Sequelize = require('sequelize');
const UserModel = require('./models/users')
const ProductModel = require('./models/products')
const db = new Sequelize('login_system', 'root', 'boo2', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
  
  },

});



const User = UserModel(db, Sequelize)
const Product = ProductModel(db, Sequelize)

db.sync()
  .then(()=>console.log('database has been created'))
  .catch((err)=>console('Database creation failed'))

exports = module.exports= {
  User, Product, db
}
