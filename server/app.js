const express = require('express');
const upload = require('./upload');
const cors = require('cors');

const app = express();
const port = 3000;

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/upload', upload);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})