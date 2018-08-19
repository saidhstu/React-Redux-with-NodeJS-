import express from 'express';
import bcrypt from 'bcrypt';
import commonValidations from '../../shared/validations/signup';
import Promise from 'bluebird';
const User= require('../../db').User;
const route = require('express').Router();
import isEmpty from 'lodash/isEmpty';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;
function validateInput(data, otherValidations){
	let {errors} = otherValidations(data);

	return Promise.all([

			User.findOne({
					  where: { email:data.email }
						}).then(user=>{
						  if(user){errors.email= 'The email address is already in use';}
					    }),

			User.findOne({
					  where: { 
					  	username:data.username

					  	 }
					        
						}).then(user=>{
						  if(user){errors.username= 'The username address is already in use';}
					    })

		]).then(()=>{
			return{
				errors,
				isValid:isEmpty(errors)
			};

		});
	
}

route.get('/:identifier', (req, res)=>{

			User.findOne({
			    where: {

			    	[Op.or]: [{email:req.params.identifier}, {username:req.params.identifier}]
			    	
			    }

			}).then(user=>{
		    res.json({user}) 
	
             })
			
		})

route.get('/', (req, res)=>{

	User.findAll()
		.then((users) =>{

			res.status(200).send(users)
		})
		.catch((err)=>{
			res.status(500).send({
				error : "Could not retrive User"
			})
		})

 	});

/*return Promise.all([ 

		User.findAll({
		where: {email:req.params.identifier}
	   }),
		User.findAll({
		where: {username:req.params.identifier}
	   })
		
	]).then(user=>{
		res.json({user});
	})*/

 route.post('/', (req, res)=>{

 			validateInput(req.body, commonValidations).then(({errors, isValid})=>{
				if(isValid){

			 		  const {username, email, password, country}= req.body;
			 	      let password_digest = bcrypt.hashSync('password', 10);

						User.create({
							username,
							email,
							password_digest,
							country,
						})
						.then((user)=>res.json({success:true}))
						.catch((err)=>res.status(500).json({error:err})
						);

						}
						else{
							res.status(400).json(errors);
						}


			 			})
 	
       })

 
exports = module.exports=route
 