const mongoose = require('mongoose')
const role = new mongoose.Schema({
  role:String
},{
timestamps:true
})
module.exports=mongoose.model("roles",role)