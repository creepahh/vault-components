const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../../User')

router.get("/", (req, res) => {
    res.json(users);    //users passed here gotta match the const declared in user.js file
});