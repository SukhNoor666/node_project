const express = require('express');
const app = express();
const pagesRoute = require('./routes/pages.js');
const userRoute = require('./routes/users.js');
const ejs = require('ejs');
const rateLimit = require('express-rate-limit');
const port = 3000;
require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;

app.set('view engine', 'ejs');
app.set('views', './views');


const limiter = rateLimit({
    windowMs: 1 * 15 * 1000,
    max: 11,
    message: "Too many requests, please try again later."
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(pagesRoute);
app.use(userRoute);
app.use(express.static('public'));



mongoose.connect(url)
.then(() =>{
    console.log("Connected to MongoDB");
    app.listen(port, () =>{
        console.log(`Server is running on http://localhost:${port}`)
    });
}).catch((error) =>{
    console.error("Error connecting to MongoDB:", error);
});
