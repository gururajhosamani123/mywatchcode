const express = require("express");
const app =express();
const mongoose=require("mongoose");
require('dotenv').config();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const authRoutes=require("./routes/auth");
const userRoutes=require("./routes/user");
const categoryRoutes=require("./routes/category");
const brandRoutes=require("./routes/brand");
const subcategoryRoutes =require("./routes/subcategory")

//port
const port=process.env.PORT;
app.listen(port,()=>console.log(`App is running on port No. Is ${port}`));

//database connection

mongoose.connect(process.env.DATABASE, 
{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex:true
    })
    .then(()=>{
       console.log("DATABASE CONNECTED") 
    });

// Middlewares

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
 app.use(express.static('uploads'));


//routes

app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",brandRoutes);
app.use("/api",categoryRoutes);
app.use("/api",subcategoryRoutes);



