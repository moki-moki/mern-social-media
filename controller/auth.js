const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

// register
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  // creating a user
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    await sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

// login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password"), 400);
  }

  try {
    // Searches for user by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json();
    }
    // method that finds password and compares is
    const match = await user.matchPasswords(password);

    if (!match) {
      return res.status(401).json();
    }

    // res.status(200).json(user);
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
    user,
  });
};
