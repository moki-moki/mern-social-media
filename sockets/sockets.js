const { Server } = require("socket.io");

let users = [];

const addUser = (userId, username, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, username, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getSingleUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const getUserByName = (username) => {
  return users.find((user) => user.username === username);
};

exports.sio = (server) => {
  return new Server(server, {
    cors: {
      transports: ["polling"],
      origin: "*",
    },
  });
};

exports.connection = (io) => {
  io.on("connection", (socket) => {
    // take user id, socket id and adds it to array of users
    socket.on("addUser", (userId, username) => {
      addUser(userId, username, socket.id);

      io.emit("getUsers", users);
    });

    // Sending message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
      const user = getSingleUser(receiverId);

      io.to(user?.socketId).emit("getMessage", {
        senderId,
        text,
      });
    });

    // Original: receiverName
    socket.on("sendNotification", ({ senderName, receiverName, type }) => {
      const receiver = getUserByName(receiverName);

      io.to(receiver?.socketId).emit("getNotification", {
        senderName,
        type,
      });
    });

    // Removes user from array on disconnect
    socket.on("disconnect", () => {
      removeUser(socket.id);

      // Get online users
      io.emit("getUsers", users);
    });
  });
};
