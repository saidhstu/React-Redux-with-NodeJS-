const Product= require('../../db').Product;
const route = require('express').Router();

route.get('/', (req, res)=>{

	Product.findAll()
		.then((products) =>{

			res.status(200).send(products)
		})
		.catch((err)=>{
			res.status(500).send({
				error : "Could not retrive User"
			})
		})

 	});

 route.post('/', (req, res)=>{

			Product.create({
				username:req.body.username,
				email:req.body.email,
				password:req.body.password,
				country:req.body.country,
			})


			.then((product)=>{

			  res.status(201).send(product)

			}).catch((err)=>{
				res.status(501).send({
		         error: "could not add new product"
				})
			})
  })
exports = module.exports=route

