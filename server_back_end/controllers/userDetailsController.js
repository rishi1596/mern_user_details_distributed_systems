const UserDetailsModel = require("../models/userDetailsModel"); //Import user details model


async function dbInsertOrUpdateDetails(req, res){
    
    const filter = {email_id: req.body.email_id}
    const options = {upsert: true, new: true} // When upsert is set to true it will insert the details if the document doesn't exists and if new is set to true itt will return the updated document in the query else the old document

    UserDetailsModel.userDetailsModel.findOneAndUpdate(
        filter, //Finds the document in the collection matching the values of filter
        req.body, //Maps to the model we created in the userDetailsModel file
        options, 
        (error, doc) => {
            if(!error){
                console.log(doc)
                //Send response back to the user i.e to the web app
                res.send({"status":"success", "msg":"Data inserted successfully"}) 
            } else {
                console.log(error)
                //Send response back to the user i.e to the web app
                res.send({"status":"error", "msg":"Something went wrong!"})
            }
        }
    );

}


module.exports = {
    dbInsertOrUpdateDetails
}