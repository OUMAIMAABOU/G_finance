const mongoose = require("mongoose");
// create table user

const user = new mongoose.Schema(
{
  name:{
    type: String,
    // required: true
  }, 
  email:{
    type: String,
    unique: true,
    trim: true,
    // required: true
  },
  cin:{
    type: String,
    // unique: true,
    // trim: true,
    // required: true
  },
  password:String,
  data_embauche:Date,
  matricule:String,
  image:String,
  phoneNumber:String,
  adress:String,
  situation_familiale:{
    type: String,
  },
  nombre_Denfant: Number,
  N_CNSS:{
    type: String,
    unique: true,
    trim: true,
    // required: true
  },
  N_CIMR:{
    type: String,
    unique: true,
    trim: true,
    // required: true
  }, 
  Service:{
    type: String,
    trim: true,
    // required: true
  },
  fonction:{
    type: String,
    trim: true,
    // required: true
  }, 
  siege_social:{
    type: String,
    trim: true,
    // required: true
  },
  roleid:{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'roles'
    }
},{timestamps:true})

 module.exports= mongoose.model("users", user);