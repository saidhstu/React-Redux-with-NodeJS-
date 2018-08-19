const Sequelize = require('sequelize');

require('sequelize-isunique-validator')(Sequelize);
const route = require('express').Router();


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
      
  id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },

  username:{
    type: DataTypes.STRING,
    allowNull: false


  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
   
    

  },
  password_digest:{
    type: DataTypes.STRING,
    allowNull: false

  },
  country:{

   type: DataTypes.STRING,
    allowNull: false
  }


  

    })
}