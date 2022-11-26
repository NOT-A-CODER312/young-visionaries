const express = require("express");

const userListener = express.Router();

const { httpGetAdminStatus, httpUserInfo } = require("./user.controller");

userListener.get("/userInfo/:id", httpGetAdminStatus);
userListener.get("/:id", httpUserInfo);

module.exports = userListener;
