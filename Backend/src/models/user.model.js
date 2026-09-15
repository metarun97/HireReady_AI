const mongoose = require("mongoose");


// userSchema created⬇️
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already taken"],
    required: true,
  },

  email: {
    type: String,
    unique: [true, "Account already exists with this email account"],
    required: true,
  },

  password: {
    type: String,
    required: true,
  }
})

// userModel created⬇️
const userModel = mongoose.model("users",userSchema);

module.exports = userModel;
