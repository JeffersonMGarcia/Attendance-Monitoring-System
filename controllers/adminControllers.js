
const createUser = (req, res) => {
    const {fname, uname, course, hours, password} = req.body
    if(!fname || !uname || !course || !hours || !password){
        res.status(400)
        throw new Error("all fields are mandatory")
    }
  res.status(201).json({ message: "Account Created" });
  console.log("this is the", req.body);
};

const updateUser = (req, res) => {
  res.status(200).json({ message: "Account Updated" });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: "Account Deleted" });
};

module.exports = { createUser, updateUser, deleteUser };
