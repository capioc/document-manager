const express = require('express');
const upload = require('./upload');
const seed = require('./seed');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//TODO
const handleError = (error) => console.error('error handler\n',error);

(async () => {
  try {
    await mongoose.connect('mongodb://mongodb:27017/test', { useNewUrlParser: true });
    seed.import();
  } catch (error) {
    handleError(error);
  }
})()

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/api/documents', require('./api/documents'));
app.use('/api/users', require('./api/users'));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/upload', upload);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
