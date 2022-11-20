const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
dotenv.config();
const app = express();
const path = require('path')
const favicon = require('serve-favicon')
const data = require('./data/ev_data.json');
const bodyParser = require('body-parser')
const Vehicle = require('./model/carsandbikemodel')

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const db = async() => {

    try{
        const conn = await mongoose.connect('mongodb+srv://Kishore:Kishore7!@practice.mbhzktk.mongodb.net/car-dataset?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
        });
        app.use(express.urlencoded({extended:true}))
        app.use(express.json())
       // app.use(favicon(path.join()))
       
        console.log("DB Connected ...")
        
         
        
    }catch(e){
            console.log(e.message);
            process.exit(1);
    }
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.route('/postcar').get((req,res) =>{
     let newCar = new Vehicle(req.body)
   
    Vehicle.find({},(err,vehi) => {
        if(err){
            res.send(err)
        }
        res.json(vehi)
    })
})

app.route('/postcar').post((req,res) =>{
    let newCar = new Vehicle(req.body)
  
   newCar.save({},(err,vehi) => {
       if(err){
           res.send(err)
       }
       res.json(vehi)
   })
})


db();

app.get('/car', (req,res,next) => {
    console.log(req.params.seats);
    let user = Number(req.params.seats);
    
    res.json(data);
    next();
}, (res,req) => {
    console.log("The second function ..")
}

);

// app.route('/car').get( (req,res) => {
//     res.redirect('https://linkedin.com');
// }).post( (req,res) => {
//     res.send('Post request called');
// })

const PORT =process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} port 5000`));