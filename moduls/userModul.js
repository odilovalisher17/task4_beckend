const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "User must have a first name!"],
  },
  lastName: {
    type: String,
    required: [true, "User must have a last name!"],
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

userSchema.post("save", function (error, doc, next) {
  if (error.code === 11000) {
    next(new Error("This email is already registered!"));
  } else {
    next(error);
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
