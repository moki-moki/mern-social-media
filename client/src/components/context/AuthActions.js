export const LoginStart = (userCredentials) => ({
  type: "LOGIN",
  payload: userCredentials,
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFail = (error) => ({
  type: "LOGIN_FAIL",
  payload: error,
});

export const AddFriend = (userId) => ({
  type: "ADDFRIEND",
  payload: userId,
});

export const Unfriend = (userId) => ({
  type: "UNFRIEND",
  payload: userId,
});
