//import model
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.loginUser = async(req,res) => {

    try{
        //fetch data
        const {email,password} = req.body;

        // check box is empty or not
        if(!email || !password)
        {
            return res.status(400).json({
                sucess:false,
                message:'Fill all the data'
            });
        }


        //User donot exist -->> Check by DB call For existing user
        let user = await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                success:false,
                message:"User Not Found !!",
            });
        }

        const payload = {
            email: user.email,
            id:user._id,
            role:user.role
        }

        //verify password and generate JWT tokens
        if(await bcrypt.compare(password,user.password)){
            //password matched
            //console.log(user.password)
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });

            user = user.toObject();
            user.token = token; 
            user.password = undefined;
            let options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'User cretaed Successfully'
            })


            // res.cookie("token",token,options).status(200).json({
            //     success:true,
            //     // token,
            //     // user,
            //     message:'User Logged In Successfully',
            //     body: {
            //         token: token,
            //         user: {
            //             id: user._id,
            //             email: user.email,
            //             role: user.role,
            //             name: user.name,
            //         },
            //     },
            // })
        }
        else
        {
            // password didnot matched
            return res.status(403).json({
                success:false,
                message:"Password didnot matched",
            });
        }




        return res.status(200).json({
            success:true,
            message:'User Lodded in SuccessFully',
        });


    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            messgae:'Login Failure'
        })
    }

}

// {
//     "email":"abhik@gmail.com",
//     "password":"abhik"
// }