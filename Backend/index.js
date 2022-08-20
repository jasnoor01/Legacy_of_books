const express = require('express')  //to import
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

var registrations, category, subcategory, adminlogin;

const connectionString = 'mongodb+srv://admin:admin@cluster0.0lqgicb.mongodb.net/?retryWrites=true&w=majority'
MongoClient.connect(connectionString, function (err, succ) {
    if (err) throw err;
    console.log('Db connected')
    var db = succ.db('LegacyOfBooks')
    registrations = db.collection('registrations')
    category = db.collection('Categories')
    subcategory = db.collection('Sub Categories')
    adminlogin = db.collection('adminlogin')
    // var              connection name

})

app.post('/Registration', (req, res) => {
    registrations.insertOne(req.body).then((succ) => {
        res.send(succ)
    })
})

app.post('/getlogin', (req, res) => {

    if (req.body.Type == 'Admin') {

        adminlogin.findOne({
            username: req.body.Email,
            password: req.body.Password
        }).then((succ) => {
            // console.log(succ);
            // res.send(succ);
            // console.log('ok');
            if (succ == null) {
                res.send('no');
            } else {
                res.send(succ);
            }
        }).catch((err) => {
            // console.log(err);
            // console.log('not ok');
            res.send('err')
        })

    } else {

    }


    // registrations.findOne(req.body).then((succ) => {
    //     res.send(succ)
    //     // console.log(req.body)
    //     // console.log(succ)
    // })
})
// Add delete get category
app.post('/addcat', (req, res) => {
    category.insertOne(req.body).then((succ) => {
        res.send(succ)
    })
})
app.get('/getcat', (req, res) => {
    category.find().toArray().then((succ) => {
        res.send(succ);
        // console.log(succ)
    })
})
app.post('/delcat', (req, res) => {
    var idd = new mongodb.ObjectId(req.body.id);
    category.findOne({
        _id: idd
    }).then((succ) => {
        subcategory.find({
            Category: succ.Category
        }).toArray().then(() => {
            subcategory.deleteMany({
                Category: succ.Category
            }
            ).then(() => {
                category.deleteOne({
                    _id: idd
                }).then(() => {
                    // console.log(s)
                    res.send('Deleted');
                })
            })
        })
    })
})

// Add delete get Sub category
app.post('/addsubcat', (req, res) => {
    subcategory.insertOne(req.body).then((succ) => {
        res.send(succ)
    })
})
app.get('/getsubcat', (req, res) => {
    subcategory.find().toArray().then((succ) => {
        res.send(succ);
        // console.log(succ)
    })
})
app.post('/delsubcat', (req, res) => {
    // console.log(req.body.id);
    var idd = new mongodb.ObjectId(req.body.id);
    subcategory.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})

app.listen(1000, (req, res) => {
    console.log('Server started')
})