const ADMIN = require("../Model/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const doLogin = async (req, res) => {
  try {
    const { mail, Password } = req.body;

    // Find admin data by email
    const admindata = await ADMIN.findOne({ mail: mail });

    // If admin data is not found
    if (!admindata) {
      return res.status(400).json("Invalid Mail ID");
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(Password, admindata.Password);
    if (isPasswordValid) {
      // Generate JWT token
      const token = jwt.sign(
        {
          id: admindata._id,
          mail: admindata.mail,
        },
        process.env.JWT_PASS,
        { expiresIn: "1d" }
      );

      return res.status(200).json({ message: "Login Successful", token });
    } else {
      return res.status(400).json("Invalid email or password");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
};

module.exports = doLogin;
