// import express

const express=require('express')

// import cors

const cors=require('cors')

// import dataservices

const dataService=require('./services/dataService')

// create an application using express

const app=express()

// to parse JSON for server responses

app.use(express.json())

// setup a port number

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

// Using  cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))


// api to get all products

app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// api to add products to wishlist

app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// api to get wishlist products

app.get('/getwishlist',(req,res)=>{
    dataService.getWishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// api to delete wishlist products

app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})