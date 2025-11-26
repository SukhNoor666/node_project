const express = require('express');
const router = express.Router();


//Create a middleware that logs a message
router.use((req, res, next)=>{
    console.log(`Request URL:  ${req.url} -  Time:  ${new Date()}`);
    next();
});

router.get('/', (req, res)=>{
    res.send("Hello, World");
});

//This uses a request parameter.  req.param is used to access
router.get('/users/:userId', (req, res)=>{
    res.send(`User id:  ${req.params.userId}`);
});

//This uses a request query.  req.query.q is used to access the query
router.get('/search', (req, res)=>{
    res.send(`Search query:  ${req.query.q}`);
});



module.exports = router;