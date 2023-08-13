const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require("dotenv").config();
exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, email, password, department, role } = req.body;
    if (!name || !email || !password || !role || !department) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }

    // Hashing the password now using bcrypt -->> Securing Password
    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash(password,10);
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'Error in hashing password',
        });
    }


    const user = await User.create({
      name,
      email,
      password:hashedPassword,
      department,
      role,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};


// {
//   "name":"Algo",
//   "email":"ThomasCoremon@gmail.com",
//   "password":"123",
//   "department":"cse",
//   "role":"Admin"
// }