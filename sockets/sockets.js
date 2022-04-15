const { Server } = require("socket.io");

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getSingleUser = (userId) => {
  return users.find((user) => user.userId === userId);
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
    console.log("user connected");

    // take user id, socket id and adds it to array of users
    socket.on("addUser", (userId) => {
      addUser(userId, socket.id);

      io.emit("getUsers", users);
    });

    // Sending message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
      const user = getSingleUser(receiverId);

      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
    });

    // Removes user from array on disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected");
      removeUser(socket.id);

      // Get online users
      io.emit("getUsers", users);
    });
  });
};
