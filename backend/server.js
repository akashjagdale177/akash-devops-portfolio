const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded resumes
app.use("/uploads", express.static("uploads"));

// Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// ================= MODELS =================

// Job Application
const Application = mongoose.model("Application", {
  name: String,
  email: String,
  phone: String,
  company: String,
  job: String,
  experience: String,
  skills: String,
  resume: String,
});

// Course Registration
const CourseRegistration = mongoose.model("CourseRegistration", {
  name: String,
  email: String,
  phone: String,
  course: String,
  education: String,
});

// Contact
const Contact = mongoose.model("Contact", {
  name: String,
  email: String,
  message: String,
});

// ================= ROUTES =================

// Home
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Admin Login
app.post("/admin-login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Wrong Username or Password",
    });
  }
});

// Save Job Application
app.post("/apply", upload.single("resume"), async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {
    const data = new Application({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      job: req.body.job,
      experience: req.body.experience,
      skills: req.body.skills,

      resume: req.file
        ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
        : "",
    });

    await data.save();

    res.json({
      message: "Application Saved Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// Get Applications
app.get("/applications", async (req, res) => {
  const data = await Application.find();
  res.json(data);
});

// Delete Application
app.delete("/applications/:id", async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.json({
      message: "Application Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Save Course Registration
app.post("/course-registration", async (req, res) => {
  try {
    const data = new CourseRegistration(req.body);

    await data.save();

    res.json({
      message: "Course Registration Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get Course Registrations
app.get("/course-registrations", async (req, res) => {
  const data = await CourseRegistration.find();
  res.json(data);
});

// Delete Course Registration
app.delete("/course-registrations/:id", async (req, res) => {
  try {
    await CourseRegistration.findByIdAndDelete(req.params.id);

    res.json({
      message: "Course Registration Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Save Contact
app.post("/contact", async (req, res) => {
  try {
    const data = new Contact(req.body);

    await data.save();

    res.json({
      message: "Message Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get Contacts
app.get("/contacts", async (req, res) => {
  const data = await Contact.find();
  res.json(data);
});

// Delete Contact
app.delete("/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      message: "Contact Message Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
