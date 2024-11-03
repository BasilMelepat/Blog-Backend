const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DBURI,{})
    .then((res) => {
      console.log("Database connected");
      
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports=connectDb;
