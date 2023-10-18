const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');
const router = require('./api');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

mongoose.connect(config.mongoURI)
  .then(res => console.log('mongodb connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})
