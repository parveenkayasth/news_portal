const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 2000;
const app = express();



const passport = require("passport");
const mongoose = require("mongoose");
const users = require('./routes/users');
const config = require('./config/database');


app.use(express.static(path.join(__dirname,'public')));


app.get("*",(req,res) => {
	res.sendFile(path.join(__dirname,'public/index.html'));
});



app.listen(port,function(){
	console.log(`Server is running at port = ${port}`);
});
