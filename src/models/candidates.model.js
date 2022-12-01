const candidatesDb = require("./candidates.mongo");

async function getAllCandidates() {
  return await candidatesDb.find(
    {},
    {
      __v: 0,
    }
  );
}

async function voteCandidate(id) {
  try {
    await candidatesDb.findOneAndUpdate(
      { _id: id },
      {
        $inc: { votes: 1 },
      },
      (err, docs) => {
        if (err) {
          //   console.log(err);
        }
      }
    );
    //   .clone();
  } catch (e) {
    // console.error(e);
  }
}

module.exports = {
  getAllCandidates,
  voteCandidate,
};
