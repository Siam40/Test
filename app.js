const express = require ("express");
const bodyParser = require("body-parser");
const cors = require ("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const usersRouter = require("./routes/users.route");









app.use("/users",usersRouter);


//home route
app.get("/", (req,res)=>{

                res.sendFile(__dirname + "/views/index.html");

})

//route error

app.use((req,res,next)=>{

           res.status(404).json({

                        message :  "404! route is not found"

           })

})


//server error

app.use((err,req,res,next)=>{


    res.status(505).json({message: "something is broke!"});


})



module.exports= app;