const asyncHandler = require("express-async-handler");
const accountModel = require("../models/accounts");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userLogin = asyncHandler(async (req, res) => {
  const { uname, password } = req.body;
  if (!uname || !password) {
    res.status(400);
    throw new Error("All fields are mandatoy");
  }
  const user = await accountModel.findOne({ uname });
  //compare password with hash
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          uname: user.uname,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30min" }
    );
    res.status(200).json({ accessToken });
    console.log(user.id);
    console.log(user.uname)
  } else {
    res.status(401);
    throw new Error("email or password not valid");
  }
});

module.exports = { userLogin };
