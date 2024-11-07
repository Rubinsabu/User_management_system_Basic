const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user_management_system");

const express = require("express");
const app = express();

app.use((req, res, next) => {
    // Prevent caching for sensitive pages after logout
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
});

// user routes
const userRoute = require("./routes/userRoute")
app.use('/',userRoute);

// admin routes
const adminRoute = require("./routes/adminRoute")
app.use('/admin',adminRoute);


app.listen(3000,()=>{
    console.log("Server Runnning...");
})