const express=require('express');
const app=express();
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const authRoute=require('./routes/auth')
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
app.use(cors());



dotenv.config();
app.use(express.json());
app.use("/imgs", express.static(path.join(__dirname, "/imgs")));
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,



}).then(console.log("MongoDB connection established")).catch((err)=>console.log(err));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "imgs");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
  app.post("/new/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });




app.use("/new/auth",authRoute)
app.use("/new/users", userRoute);
app.use("/new/posts", postRoute);

app.listen("5000",()=>{
    console.log("Backend is running...")
})
