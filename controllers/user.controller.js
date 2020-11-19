const db = require("../models");

const findAllTasks = (req, res) => {
    db.User.findById(req.user.id)
    .populate("tasks")
    .then(user => {
        res.json(user.tasks)
    }).catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
}

const deleteTask = (req, res) => {
    res.end()
}

const createTask = (req, res) => {
    res.end()
}

module.exports = { findAllTasks, deleteTask, createTask }