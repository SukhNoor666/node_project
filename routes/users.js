const express = require('express');
const router = express.Router();
const path = require('path');
const { readData } = require('../utils/file.js');
const userController =  require('../controllers/userController.js');
const apicache = require("apicache");
let cache = apicache.middleware;

router.get('/home', cache('5 minutes'), (req, res)=>{
    res.render('home');
});

router.get('/json-example', (req, res)=>{
    res.json({ message: "This is a JSON response" });
});

router.get('/api/v1/users', async (req, res)=>{
    try {
        const data = await readData();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(`Internal Server Error: ${error}`);
        console.log(error);
    }
});    

router.post('/users', userController.createUser);

module.exports = router;