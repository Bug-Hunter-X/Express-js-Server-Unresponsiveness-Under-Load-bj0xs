const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Assume a large or complex operation here
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});