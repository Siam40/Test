let users = require("../models/users.model");
const { v4: uuidv4 } = require('uuid');



//get users

const getAlluser = (req,res)=>{

    res.status(200).json({users});
}



// //create users

const createUser = (req,res)=>{

   const newUser = {

    id:  uuidv4(),
   username: req.body.username,
   email: req.body.email,

   };
   

   users.push(newUser);
    res.status(200).json(users);
};


// //create userupdate

const updateUser= (req,res)=>{
 
    const userId= req.params.id;

    const {username,email}=req.body;
    users.filter((user)=>user.id === userId).map((selecteduser)=>{

        selecteduser.username=username;
        selecteduser.email=email;

    })
 
     res.status(200).json({users});
 };
 

// //create userupdate

const deleteUser= (req,res)=>{
 
    const userId= req.params.id;

    const {username,email}=req.body;
    users=users.filter((user)=>user.id === userId).map((selecteduser)=>{

        selecteduser.username=username;
        selecteduser.email=email;

    })
 
     res.status(200).json({users});
 };


module.exports={getAlluser,createUser,updateUser,deleteUser};
