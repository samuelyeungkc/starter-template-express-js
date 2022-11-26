const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    console.log('request received');
    res.json({status: 'good'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

