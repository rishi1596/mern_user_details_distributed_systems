const express = require("express");
const hostname = '127.0.0.1';
const port = 3001;
const app = express()

// '127.0.0.1:3001/' any reqeust to this endpoint will get a 'Hello World!' string response
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//Listen method as the name sound listens to the connection requests made to above endpoints 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});