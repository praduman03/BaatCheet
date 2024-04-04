import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const getMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const senderId = req.user._id;
    //* we need to use populate to get the messages as we are only storing messages ids in the conversation model
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, id] }
    }).populate("messages");
    if (!conversation) {
      res.status(200).json([]);
      return;
    }
    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessage Controller: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //Todo SOCKET.IO implementation will be done here

    // await newMessage.save();
    // await conversation.save();
    //* these two task will run in parallel using Promise.all
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error in sendMessage Controller: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
