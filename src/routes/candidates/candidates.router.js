const express = require("express");

const candidatesListener = express.Router();

const { httpGetCandidates, httpPostVotes } = require("./candidates.controller");

candidatesListener.get("/", httpGetCandidates);
candidatesListener.post("/:id", httpPostVotes);

module.exports = candidatesListener;
