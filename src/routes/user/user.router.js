const express = require("express");

const userListener = express.Router();

const {
  httpGetAdminStatus,
  httpUserInfo,
  httpPostVoted,
  httpPostVotedT,
} = require("./user.controller");

userListener.get("/userInfo/:id", httpGetAdminStatus);
userListener.get("/:id", httpUserInfo);
userListener.post("/vp/:id", httpPostVoted);
userListener.post("/t/:id", httpPostVotedT);

module.exports = userListener;
