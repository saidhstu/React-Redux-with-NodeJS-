import express from 'express';
import Sequelize from 'sequelize';
import isEmpty from 'lodash/isEmpty';
const route = require('express').Router();
import Promise from 'bluebird';
const User= require('../db').User;
import bcrypt from 'bcrypt';
const Op = Sequelize.Op;
import Validator from 'validator';

 route.post('/', (req,res)=>{
 	const {usermail, password } = req.body;

 	User.findOne({
			    where: {

			    	[Op.or]: [{email:usermail}, {username:usermail}]
			    }

			}).then(user=>{
		     if(user){
		     	if(bcrypt.compareSync(password, user.get('password_digest'))){

		     	}else{
		     		res.status(401).json({errors:'Invalid Username or Password'})
		     	}

		     }else{
		     	res.status(401).json({errors: 'Invalid Username or Password'})
		     }
	
             })
			
 })

exports = module.exports=route;