const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/write', (req, res) => {
  const utcTime = new Date().toUTCString();
  const message = `Hello from Server 1 at ${utcTime}\n`;
  
  fs.appendFile('/data/output.txt', message, (err) => {
    if (err) {
      return res.status(500).send('Error writing to file');
    }
    res.send(`Wrote: ${message}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server 1 is running on http://localhost:${PORT}`);
});
