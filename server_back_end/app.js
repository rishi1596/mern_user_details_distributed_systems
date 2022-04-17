const express = require("express");
const hostname = '127.0.0.1';
const port = 3001;
const app = express()
const oDatabse = require("./database");
const UserDetailsController = require ("./controllers/userDetailsController")

/**
 * For each incoming request parse the request body to JSON object
 */
app.use(express.json());


/** 
 * For each incoming request allow cross connection (To avoid CORS error)
 */
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});


/**
 * Endpoint to receive new user details
 */
app.post('/newUserDetails', (req, res) => {
    console.log(req.body)
    UserDetailsController.dbInsertOrUpdateDetails(req,res)
})

/**
 * Listen method as the name sound listens to the connection requests made to above endpoints  
 */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  oDatabse.connectDB()
});


