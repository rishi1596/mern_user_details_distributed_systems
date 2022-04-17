const mongoose = require("mongoose");

//Define the structure of the document
const userDetailsSchema = new mongoose.Schema({
    name: String,
    email_id: String,
    profile_url: String
});

//Name of the collection (table) in our database
const userDetailsCollectionName = "userdetails"

//Mongoose compiles a model of the given schema
const userDetailsModel = mongoose.model(userDetailsCollectionName, userDetailsSchema)

//Export it so that it can be consumed from another file of the project
module.exports = {
    userDetailsModel
}