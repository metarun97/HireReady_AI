const mongoose = require("mongoose");

// connectToDb function created  to connect Databse⬇️
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Database");
  } catch (error) {
    console.log("MongoDB Databse error:", error)
  }
}


module.exports = connectToDb;
