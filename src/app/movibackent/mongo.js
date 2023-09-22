const mongoose = require("mongoose")

const connection = mongoose.model("",

    new mongoose.Schema({
      name:String,
      phone:Number,
      email:String,
      paymentId:Number,
      client_id:String
    }),"moviesBckd"

)
module.exports = connection
