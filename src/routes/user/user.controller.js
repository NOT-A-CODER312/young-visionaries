const {
  getOneUser,
  userIdExist,
  findUserAddUserInfo,
} = require("../../models/users.model");
const { default: mongoose } = require("mongoose");
async function httpGetAdminStatus(req, res) {
  try {
    const userId = req.params.id;

    if (userId === undefined) {
      return res.status(404).json({
        error: "Id not valid",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({
        error: "Id not Valid",
      });
    }

    const user = await getOneUser(userId);
    // console.log(user.admin);
    return res.json({
      admin: user.admin,
    });
  } catch (e) {
    console.error(e);
  }
}

async function httpUserInfo(req, res) {
  const id = req.params.id;
  if (id === undefined) {
    return res.status(404).json({
      error: "Id not Valid",
    });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Id not valid",
    });
  }

  const checkId = await userIdExist(id);

  if (!checkId) {
    return res.status(404).json({
      error: "Id not found",
    });
  }
  await findUserAddUserInfo(id);
  return res.status(200).json({ updated: true });
}

module.exports = {
  httpGetAdminStatus,
  httpUserInfo,
};
