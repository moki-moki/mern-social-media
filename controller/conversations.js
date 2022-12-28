const Conversation = require("../models/Conversations");
const Message = require("../models/Message");

// Creates Conversation
exports.createConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const saveConversation = await newConversation.save();

    res.status(200).json(saveConversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get users conversation
exports.conversationHistory = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.id] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get conversation of two users
exports.twoUserConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Add message
exports.addMessage = async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const saveMsg = await newMessage.save();

    res.status(200).json(saveMsg);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all messages
exports.getAllMessagesFromConversation = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.id,
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
