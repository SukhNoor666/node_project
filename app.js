const express = require('express');
const app = express();
const router = require('./routes/pages.js')
const port = 3000;

//app.get('/', (req, res) => {
  //res.send('Hello World!');
//});;

app.use(router);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});