const {
  createConversation,
  conversationHistory,
  twoUserConversation,
  addMessage,
  getAllMessagesFromConversation,
} = require("../controller/conversations");

const router = require("express").Router();

//  New conversation
router.post("/conversation", createConversation);

// Get users conversation
router.get("/conversation/:id", conversationHistory);

// Two user conversation
router.get("/conversation/:firstUserId/:secondUserId", twoUserConversation);

// Send msg
router.post("/sendMsg", addMessage);

// Get all conversation messages
router.get("/:id", getAllMessagesFromConversation);

module.exports = router;
