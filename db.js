const mongoose = require("mongoose");

const db = async (req, res)=>{
    try {
        const URI = process.env.MONGO_URI;
        mongoose.connect(URI);
        console.log("connected to MongoDB");        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Could not connect to DB");  
    }
}

module.exports = db;