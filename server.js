require("dotenv").config();

const express = require("express");
const multer = require("multer");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const http = require("http");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const conversationRouter = require("./routes/conversations");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const sockets = require("./sockets/sockets");

const app = express();

const server = http.createServer(app);
const io = sockets.sio(server);

sockets.connection(io);

connectDB();

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
// app.use(helmet());
app.use(helmet({ contentSecurityPolicy: false }));

app.use(morgan("common"));

// For file uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded nice job!");
  } catch (error) {
    console.log(error);
  }
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);
app.use("/api/msgs", conversationRouter);

// HEROKU  STUFF
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/client/build", "index.html")));
}

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const serverStart = server.listen(PORT, () => console.log(`Sever running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  serverStart.close(() => process.exit(1));
});
