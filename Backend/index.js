const express = require('express')  //to import
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const { default: axios } = require('axios')
// var LocalStorage = require('node-localstorage').LocalStorage,
// localStorage = new LocalStorage('./scratch');

app.use(bodyParser.json())
app.use(cors())

// var a = localStorage.getItem('UserLog');
var registrations, category, subcategory, adminlogin, department, products, cart;

const connectionString = 'mongodb+srv://admin:admin@cluster0.0lqgicb.mongodb.net/?retryWrites=true&w=majority'
MongoClient.connect(connectionString, function (err, succ) {
    if (err) throw err;
    console.log('Db connected')
    var db = succ.db('LegacyOfBooks')
    registrations = db.collection('registrations')
    category = db.collection('Categories')
    subcategory = db.collection('Sub Categories')
    adminlogin = db.collection('adminlogin')
    department = db.collection('Add_Department')
    products = db.collection('Products')
    cart = db.collection('Cart')

    // var              connection name

})

app.post('/Registration', (req, res) => {
    registrations.insertOne(req.body).then((succ) => {
        res.send(succ)
    })
})
app.get('/RegUsers', (req, res) => {
    registrations.find().toArray().then((succ) => {
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
        registrations.findOne({
            Email: req.body.Email,
            Password: req.body.Password
        }).then((succ) => {
            res.send(succ)
            // console.log(req.body)
            // console.log(succ)
        })

    }


    // registrations.findOne(req.body).then((succ) => {
    //     res.send(succ)
    //     // console.log(req.body)
    //     // console.log(succ)
    // })
})
// Update user updateUser
app.get('/getoneUser', (req, res) => {

    var idd = new mongodb.ObjectId(req.query.id);
    // console.log(idd)
    registrations.findOne({
        _id: idd
    }).then((succ) => {
        res.send(succ);
        // console.log(succ)
        // console.log(req.body);
    })


})
app.post('/updateUser', (req, res) => {
    var idd = new mongodb.ObjectId(req.query.id);
    registrations.updateOne({ _id: idd }, {
        $set: {
            Name: req.body.Name,
            Dob: req.body.Dob,
            Address: req.body.Address,
            Pincode: req.body.Pincode,
            State: req.body.State,
            Urn: req.body.Urn,
            Batch: req.body.Batch,
            Department: req.body.Department,
            Contact: req.body.Contact
        }
    }).then((succ) => {
        res.send("succ")
    })

})
app.post('/updateUserStatus', (req, res) => {
    var idstat = new mongodb.ObjectId(req.body.idd);
    registrations.updateOne({ _id: idstat }, {
        $set: {
            Status: req.body.Status
        }
    }).then((succ) => {
        res.send("succ")
        // console.log(req.body)
    })

})
// Delete user
app.post('/deluser', (req, res) => {
    // console.log(req.body.id);
    var iddeluser = new mongodb.ObjectId(req.body.id);
    registrations.deleteOne({
        _id: iddeluser
    }).then((succ) => {
        res.send('Deleted');
    })
})
// forgetpass
app.post('/fpass', (req, res) => {
    registrations.findOne({
        Email: req.body.Email,
        Contact: req.body.Contact,
        Dob: req.body.DOB
    }).then((succ) => {
        res.send(succ)
        // console.log(succ)
        registrations.updateOne({ Email: req.body.Email }, {
            $set: {
                Password: req.body.npass
            }
        }).then((suc) => {
            // console.log(suc)
        })
    })
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
// Add department
app.post('/adddep', (req, res) => {
    department.insertOne(req.body).then((succ) => {
        res.send(succ)
    })
})

app.get('/getdep', (req, res) => {
    department.find().toArray().then((succ) => {
        res.send(succ);
        // console.log(succ)
    })
})
app.post('/deldep', (req, res) => {
    // console.log(req.body.id);
    var idd = new mongodb.ObjectId(req.body.id);
    department.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})

app.post('/addpro', (req, res) => {
    products.insertOne(req.body).then((succ) => {
        res.send(succ)
    })
})
app.get('/getpro', (req, res) => {

    products.find().toArray().then((succ) => {
        res.send(succ);
    })
})
app.post('/delproduct', (req, res) => {
    var idd = new mongodb.ObjectId(req.body.id);
    products.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})

app.get('/getprodesc', (req, res) => {
    var iddesc = new mongodb.ObjectId(req.query.id);
    // var iddesc = new mongodb.ObjectId("6311c55e2a95ea44d7359fe7");
    // console.log(req.query.id)
    products.findOne({
        _id: iddesc
    }).then((succ) => {
        // console.log(succ)
        res.send(succ)
    })
})
app.post('/addtocart', (req, res) => {
    var idacart = new mongodb.ObjectId(req.body.itemid);
    products.findOne({ _id: idacart }).then((succ) => {
        delete succ._id
        let e = {
            ...req.body,
            ...succ
        }

        // console.log(e)
        cart.insertOne(e).then((su) => {
            // console.log(su);
            res.send(su)
        })

    })
})

app.get('/getitemsofcart', (req, res) => {
    cart.find({
            cartof: req.query.id
        }).toArray().then((succ) => {
            res.send(succ)
        })
})


app.post('/checkout', (req, res) => {

})




app.listen(1000, (req, res) => {
    console.log('Server started')
})