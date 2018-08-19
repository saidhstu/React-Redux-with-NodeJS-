const Sequelize = require('sequelize');


const route = require('express').Router();


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('products', {
      
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
    allowNull: false

  },
  password:{
    type: DataTypes.STRING,
    allowNull: false

  },
  country:{

   type: DataTypes.STRING,
    allowNull: false
  }


  

    })
}

