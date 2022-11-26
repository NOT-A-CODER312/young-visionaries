const usersDB = require("./users.mongo");

async function findUserAddUserInfo(id) {
  return await usersDB.findOneAndUpdate(
    {
      _id: id,
      admin: { $exists: false },
    },
    {
      admin: false,
    },
    { upsert: false }
  );
}

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

module.exports = { setAdmin, getOneUser, findUserAddUserInfo, userIdExist };
