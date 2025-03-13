const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/read', (req, res) => {
  fs.readFile('/data/output.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server 2 is running on http://localhost:${PORT}`);
});
