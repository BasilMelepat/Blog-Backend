const USER = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const doSignin = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const userdata = await USER.findOne({ Email: Email });
    if (!userdata) {
      return res.status(404).json("User Not Found");
    }

    if (userdata) {
      bcrypt.compare(Password, userdata.Password).then((result) => {
        if (result) {
          const token = jwt.sign(
            {
              id: userdata._id,
              name: userdata.userName,
              email: userdata.Email,
            },
            process.env.JWT_PASS,
            { expiresIn: "1d" }
          );

          res.status(200).json({ message: "Login Succesfull", token: token });
        } else {
          res.status(400).json("invalid id or password");
        }
      });
    }
  } catch (error) {
    return res.status(400).json("Bad request");
  }
};

module.exports = doSignin;
