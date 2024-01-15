const mongoose = require("mongoose");
const { MONGO_URL } = require("../config");

const dbUrl = MONGO_URL;

mongoose.connect(dbUrl);

const taskSchema = mongoose.Schema({
    title: String,
    assigned_to: String,
    status: String,
});

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const teamSchema = mongoose.Schema({
    name: String,
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
    ],
});

const Task = mongoose.model("Task", taskSchema);
const Users = mongoose.model("Users", userSchema);
const Teams = mongoose.model("Teams", teamSchema);

module.exports = { Task, Users, Teams };
