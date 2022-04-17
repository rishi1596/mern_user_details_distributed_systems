const mongoose = require("mongoose")

function connectDB(){

    mongoose.connect("mongodb://127.0.0.1:27017/distributed_systems_tutorial").catch((err) => {
        console.log("Error in connecting to database : ", err);
        // exit process to retry
        process.exit(1);
      });
      const conn = mongoose.connection;
      conn.on("connected", function () {
        console.log("Database is connected successfully");
      });
      conn.on("disconnected", function () {
        console.log("Database is disconnected successfully");
      });
      conn.on("error", console.error.bind(console, "Connection error:"));


}

module.exports = { connectDB };