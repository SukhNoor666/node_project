const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
  res.send('Hello World;')
});

// This uses a request parameter. req.param is used to access
router.get('/user/:userId', (req, res)=>{
    res.send(`User id: ${req.params.userId}`);
});

//This uses a request query. req.query.q is used to access the query 
router.get('/search', (req, res)=>{
    res.send(`Search query: ${req.query.q}`);
});
module.exports = router;