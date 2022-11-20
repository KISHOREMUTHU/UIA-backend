const express = require('express')
const router = express.Router()
const Vehicle = require('../model/carsandbikemodel')

router.get('/',async (req,res)=>{
   try{
     res.send('Get request ..')
   }catch(e){
            res.status(500).json({message:err.message})
   }
})

router.get('/:id', (req,res)=>{
    res.send(req.params.id);
})

router.post('/upload', (req,res)=>{
})


router.patch('/', (req,res)=>{

})
module.exports= router