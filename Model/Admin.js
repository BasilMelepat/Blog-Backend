const mongoose = require("mongoose");

const AdminModel = mongoose.Schema({
    mail: {
    type: String,
    required: true,
    unique:true
  },

  Password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
});

const adminSchema = mongoose.model("Admin", AdminModel);

module.exports = adminSchema;
