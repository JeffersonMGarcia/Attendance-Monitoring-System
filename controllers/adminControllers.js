const asyncHandler = require("express-async-handler");
const accountModel = require('../models/accounts')
const bcrypt = require('bcryptjs');

const getUser = asyncHandler(async(req, res) => {
  const account = await accountModel.find();
  res.status(200).json(account)
})

//CREATING USER
const createUser = asyncHandler(async(req, res) => {
    let {name, uname, course, hours, roles, phone, password} = req.body

    if(!name || !uname || !course || !hours || !roles || !phone || !password){
        res.status(400)
        throw new Error("all fields are mandatory") 
    }
    const checkUsername = await accountModel.find({
      uname : uname
    }).exec()

    if(checkUsername.length >= 1){
      return res.json({operation: false, msg: "Username already exist"})
    }
    password = await bcrypt.hash(password, 10)

    const account = await accountModel.create({
      name, uname, course, hours, roles, phone, password
    })
  res.status(201).json({operation: true, msg: "Account Created", account});
  console.log(password)
});



const updateUser = (req, res) => {
  res.status(200).json({ message: "Account Updated" });
};


//DELETE ACCOUNT
const deleteUser = asyncHandler(async(req, res) => {
  const accountId = req.params.id;

  // Check if accountId is undefined
  if (!accountId) {
    return res.status(400).json({ message: "Account ID is missing or invalid" });
  }

  try {
    // Find the account by its ID
    const account = await accountModel.findById(accountId);

    // Check if the account exists
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Delete the account
    await accountModel.findOneAndDelete({ _id: accountId });

    // Respond with the deleted account
    res.status(200).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {getUser, createUser, updateUser, deleteUser };
