const express=require('express')  //to import
const app=express()
const methodOverride=require('method-override')
const bodyParser=require('body-parser')
const mongodb=require('mongodb')
const MongoClient=require('mongodb').MongoClient
const cors=require('cors')

app.use(bodyParser.json())
app.use(cors())

var registrations;
const connectionString='mongodb+srv://admin:admin@cluster0.0lqgicb.mongodb.net/?retryWrites=true&w=majority'
    MongoClient.connect(connectionString,function(err,succ){
        if(err) throw err;
        console.log('Db connected')
        var db=succ.db('LegacyOfBooks')
        registrations=db.collection('registrations')
        // var              connection name

})

app.post('/Registration',(req,res)=>{  
        registrations.insertOne(req.body).then((succ)=>{
            res.send(succ)
    })
})

app.post('/getlogin',(req,res)=>{
    registrations.findOne(req.body).then((succ)=>{
        res.send(succ)
    })
})




app.listen(1000,(req,res)=>{
    console.log('Server started')
})