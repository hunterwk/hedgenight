const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const schema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 6,
    maxlength: 16,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  // add additional user fields as needed
  tasks: [
    {
        name: {
            type: String,
            trim: true
        },
        notes: {
            type: String,
            trim: true
        },
        
        duration: {
            type: Number
        },
    },
],
});

// hash password before saving when the password is new or changed.
schema.pre("save", function () {
  if (!this.isModified("password")) return Promise.resolve();

  return bcrypt.hash(this.password, SALT_ROUNDS).then((hashResult) => {
    this.password = hashResult;
  });
});

schema.methods.comparePassword = function compareUserPassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};
const User = mongoose.model("User", schema);
module.exports = User;
