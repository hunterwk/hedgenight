//const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {Schema, Types, model} = require("mongoose")
const SALT_ROUNDS = 10;
const Task =require("./task.model")

const schema = Schema({
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
  // tasks: [Tasks],


  //referencing tasks schema and dividing it up by object ID
  //will be an array of IDs 
  tasks: [{
    type: Types.ObjectId, //Schema.Types.ObjectId 
    ref: "Task",
  }]
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

schema.methods.addTask = async function addTaskToUser(taskData) {
  const task = await Task.create(taskData)
  this.tasks.push(task)
  await this.save()
  return task
};

const User = model("User", schema);
module.exports = User;
