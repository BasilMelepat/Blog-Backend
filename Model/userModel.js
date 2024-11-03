const mongoose = require("mongoose");


const userModel = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique:true,
    
  },
  Password: {
    type: String,
    required: true,
  },
});

const userSchema = mongoose.model("users", userModel);

module.exports = userSchema;
