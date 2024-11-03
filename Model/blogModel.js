const mongoose = require("mongoose");

const blogModel = mongoose.Schema({
  content: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: new Date(),
    immutable: true,
  },

  deleted: {
    type: Boolean,
    default: false,
  },

  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  ImagePath: {
    type: String,
  },
});

const createdBlog = mongoose.model("blogs", blogModel);

module.exports = createdBlog;
