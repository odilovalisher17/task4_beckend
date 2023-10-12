const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name!"],
  },
  email: {
    type: String,
    required: [true, "User must have an email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "user must have a password"],
  },
  lastLogin: {
    type: String,
    required: [true, "User must have a last log in time!"],
  },
  status: {
    type: String,
    required: [true, "User must have a status!"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
