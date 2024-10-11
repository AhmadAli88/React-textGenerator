const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

app.get("/api/hipster", (req, res) => {
    axios.get('http://hipsum.co/api/?type=hipster-centric&sentences=3')
    .then(response => {
      console.log(response.data);  // This will give you an array of sentences
    })
    .catch(error => {
      console.error('Error fetching the data:', error);
    });
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
