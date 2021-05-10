const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 4000;
const userModel = require("./model/user");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/signup', (req, res) => {
    userModel.findOne({email:req.body.email}, (err, user) =>{
        if(!user){
            userModel.insertMany(req.body);
            res.status(200).send(req.body)
        }
        else{
            return res.json({
                success:false
            })
        }
    })
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});