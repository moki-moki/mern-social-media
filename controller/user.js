const User = require("../models/User");

// GET A USER
exports.getUser = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.find({ username: username });
    const { password, updatedAt, ...other } = user._doc;

    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Edit users profile (username)
exports.editUsersProfile = async (req, res) => {
  const newName = req.body.username;
  const id = req.params.id;
  if (req.body.username !== null) {
    try {
      let user = await User.findById(id);
      user.username = newName;
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

// Add user as friend
exports.addUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.friends.includes(req.body.userId)) {
        await user.updateOne({ $push: { friends: req.body.userId } });
        await currentUser.updateOne({ $push: { friends: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};

// Remove user from friends
exports.removeUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.friends.includes(req.body.userId)) {
        await user.updateOne({ $pull: { friends: req.body.userId } });
        await currentUser.updateOne({ $pull: { friends: req.params.id } });
        res.status(200).json("friend has been removed");
      } else {
        res.status(403).json("This is not your friend");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You cant unfriend yourself");
  }
};

exports.listUsersFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const friends = await Promise.all(
      user.friends.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];

    friends.map((friend) => {
      const { _id, username } = friend;
      friendList.push({ _id, username });
    });
    res.status(200).json(friendList);
  } catch (error) {
    res.status(500).json(error);
  }
};
