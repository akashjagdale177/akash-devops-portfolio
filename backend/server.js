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



// Job Application Model

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



// Course Registration Model

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



// Contact Model

const Contact = mongoose.model(

"Contact",

{

name:String,

email:String,

message:String

}

);



app.get("/",(req,res)=>{

res.send("Backend Running 🚀");

});



// Admin Login

app.post("/admin-login",(req,res)=>{

const {username,password}=req.body;

if(

username===process.env.ADMIN_USERNAME &&
password===process.env.ADMIN_PASSWORD

){

res.json({

success:true,

message:"Login Successful"

});

}

else{

res.status(401).json({

success:false,

message:"Wrong Username or Password"

});

}

});



// Save Job Application

app.post("/apply",async(req,res)=>{

try{

const data=new Application(req.body);

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



// Get Job Applications

app.get("/applications",async(req,res)=>{

const data=await Application.find();

res.json(data);

});



// Delete Job Application

app.delete("/applications/:id",async(req,res)=>{

try{

await Application.findByIdAndDelete(req.params.id);

res.json({

message:"Application Deleted Successfully"

});

}

catch(error){

res.status(500).json({

error:error.message

});

}

});



// Save Course Registration

app.post("/course-registration",async(req,res)=>{

try{

const data=new CourseRegistration(req.body);

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



// Get Course Registrations

app.get("/course-registrations",async(req,res)=>{

const data=await CourseRegistration.find();

res.json(data);

});



// Delete Course Registration

app.delete("/course-registrations/:id",async(req,res)=>{

try{

await CourseRegistration.findByIdAndDelete(req.params.id);

res.json({

message:"Course Registration Deleted Successfully"

});

}

catch(error){

res.status(500).json({

error:error.message

});

}

});



// Save Contact Message

app.post("/contact",async(req,res)=>{

try{

const data=new Contact(req.body);

await data.save();

res.json({

message:"Message Saved Successfully"

});

}

catch(error){

res.status(500).json({

error:error.message

});

}

});



// Get Contact Messages

app.get("/contacts",async(req,res)=>{

const data=await Contact.find();

res.json(data);

});



// Delete Contact Message

app.delete("/contacts/:id",async(req,res)=>{

try{

await Contact.findByIdAndDelete(req.params.id);

res.json({

message:"Contact Message Deleted Successfully"

});

}

catch(error){

res.status(500).json({

error:error.message

});

}

});



app.listen(5000,()=>{

console.log("Server running on port 5000");

});
