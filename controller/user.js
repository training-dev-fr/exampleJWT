let userModel = require('../model/User');
let jwt = require("jsonwebtoken");
require("dotenv").config()

const signup = (req, res) => {
    let user = userModel.signup(req.body);
    res.status(201).json(user);
}

const login = (req, res) => {
    let user = userModel.login(req.body.email, req.body.password);
    let token = jwt.sign({ email: user.email, id: user.id }, process.env.TOKEN_SALT)
    res.status(200).json({
        email: user.email,
        token: token
    });
}

const getAll = (req, res) => {
    let userList = userModel.getAll();
    res.status(200).json(userList);
}

const updateUser = (req, res) => {
    let userList = userModel.getAll();
    let updateUser = userList.find(u => u.email == req.body.email);
    if (updateUser.id == req.token.id) {
        userModel.update(req.body.email, req.body.password);
        res.status(200).json(userList);
    } else {
        res.status(401).json({ message: "Vous n'avez pas les droits" });
    }

}

module.exports = { signup, login, getAll, updateUser };