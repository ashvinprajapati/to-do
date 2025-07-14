const express=require('express');
const app=express();
const mongoose=require('mongoose');
require("dotenv").config();
const cors=require('cors');

app.use(cors());
app.use(express.json());
// Add this at the bottom to serve frontend


const taskRotes=require('./routes/taskRoutes')

// const uri=process.env.MONGO_URI;
const PORT=process.env.PORT || 3000;

// app.use('/api',taskRotes)
app.use("/api/tasks", taskRotes);


app.listen(PORT,()=>{
    console.log("server connected");
    mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");

})