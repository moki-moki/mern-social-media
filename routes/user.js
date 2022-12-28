const router = require("express").Router();
const {
  getUser,
  editUsersProfile,
  addUser,
  removeUser,
  listUsersFriends,
} = require("../controller/user");

router.get("/", getUser);

// Edit profile
router.patch("/edit/:id", editUsersProfile);

// Add user as friend
router.put("/addFriend/:id", addUser);

// Remove user from friends
router.put("/removeFriend/:id", removeUser);

router.get("/friends/:id", listUsersFriends);

module.exports = router;
