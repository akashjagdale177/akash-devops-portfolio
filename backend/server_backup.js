const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();


app.use(cors());

app.use(express.json());





mongoose.connect(process.env.MONGO_URL)
.then(()=>{

console.log("MongoDB Connected");

})
.catch((err)=>{

console.log(err);

});







const Application = mongoose.model(
"Application",
{

name:String,

email:String,

phone:String,

company:String,

job:String,

experience:String,

skills:String

}

);








const CourseRegistration = mongoose.model(
"CourseRegistration",
{

name:String,

email:String,

phone:String,

course:String,

education:String

}

);









app.get("/",(req,res)=>{


res.send("Backend Running 🚀");


});









// JOB APPLICATION SAVE

app.post("/apply",async(req,res)=>{


try{


const data = new Application(req.body);


await data.save();



res.json({

message:"Application Saved Successfully"

});


}


catch(error){


res.status(500).json({

error:error.message

});


}


});









// VIEW JOB APPLICATIONS

app.get("/applications",async(req,res)=>{


const data = await Application.find();


res.json(data);


});











// COURSE REGISTRATION SAVE


app.post("/course-register",async(req,res)=>{


try{


const data = new CourseRegistration(req.body);


await data.save();



res.json({

message:"Course Registration Saved Successfully"

});


}


catch(error){


res.status(500).json({

error:error.message

});


}


});









// VIEW COURSE REGISTRATIONS


app.get("/course-registrations",async(req,res)=>{


const data = await CourseRegistration.find();


res.json(data);


});









app.listen(5000,()=>{


console.log("Server running on port 5000");


});
