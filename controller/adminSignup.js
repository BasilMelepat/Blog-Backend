const ADMIN = require("../Model/Admin");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const AdmindoSignup = async (req, res, next) => {
  try {
    // Hash the password
    const hash = await bcrypt.hash(req.body.Password, saltRounds);
    const doc = { ...req.body, Password: hash };

    // Save the new admin document to the database
    await new ADMIN(doc).save();
    res.status(200).json("Account Created Successfully");
  } catch (err) {
    // Handle duplicate email or other errors
    res.status(400).json("Mail id has already been taken");
    console.log(err);
  }
};

module.exports = AdmindoSignup;
