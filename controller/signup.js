const USER = require("../Model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const doSignup = (req, res) => {

  console.log(req);
  

  bcrypt.hash(req.body.Password,saltRounds).then((hash) => {
    console.log(req.body.Password, hash);

    const doc = { ...req.body, Password: hash };
    USER(doc)
      .save()
      .then(() => {
        res.status(200).json("Account Created Successfully");
      })
      .catch((err) => {
        res.status(400).json("Mail id has already taken");
        console.log(err);
      });
  });
};

module.exports = doSignup;
