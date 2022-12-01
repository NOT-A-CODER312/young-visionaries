const usersDB = require("./users.mongo");

async function findUserAddUserInfo(id) {
  return await usersDB.findOneAndUpdate(
    {
      _id: id,
      admin: { $exists: false },
      votedVP: { $exists: false },
      VotedTreasurer: { $exists: false },
    },
    {
      votedVP: false,
      VotedTreasurer: false,
      admin: false,
    },
    { upsert: false }
  );
}
async function findAllUpdate() {
  return await usersDB.updateMany(
    {
      // admin: { $exists: false },
      votedVP: { $exists: false },
      VotedTreasurer: { $exists: false },
    },
    {
      votedVP: false,
      VotedTreasurer: false,
      admin: false,
    },
    { upsert: false }
  );
}
// findAllUpdate();

async function setAdmin(id, admin) {
  try {
    await usersDB.findOne(
      { _id: id },
      {
        admin: admin,
      },
      (err, docs) => {
        if (err) {
          console.log(err);
        }
      }
    );
  } catch (e) {
    console.error(e);
  }
}

async function getOneUser(id) {
  const user = await usersDB.findById(id);

  return user;
}
async function userIdExist(id) {
  return await usersDB.findById(id);

  // usersDB.findOne({
  //   name: id,
  // });
}

async function setVotedVp(id) {
  try {
    console.log(id, "sdfdsf", true);
    const user = await usersDB.findOneAndUpdate(
      { _id: id },
      {
        votedVP: true,
        // name: "not me",
      }
    );
    console.log(user);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function setVotedT(id) {
  try {
    console.log(id, "sdfdsf", true);
    const user = await usersDB.findOneAndUpdate(
      { _id: id },
      {
        VotedTreasurer: true,
        // name: "not me",
      }
    );
    console.log(user);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

module.exports = {
  setAdmin,
  getOneUser,
  findUserAddUserInfo,
  userIdExist,
  setVotedVp,
  setVotedT,
};
