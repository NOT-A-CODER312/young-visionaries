const {
  getAllCandidates,
  voteCandidate,
} = require("../../models/candidates.model");

const { default: mongoose } = require("mongoose");

async function httpGetCandidates(req, res) {
  try {
    //   const userId = req.params.id;

    const user = await getAllCandidates();
    // console.log(user, "user");
    return res.json(user);
  } catch (e) {
    console.error(e);
  }
}
async function httpPostVotes(req, res) {
  try {
    const candidateID = req.params.id;

    const candidateVoted = await voteCandidate(candidateID);

    // console.log(candidateVoted, "user");
    return res.json({
      voted: true,
    });
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  httpGetCandidates,
  httpPostVotes,
};
