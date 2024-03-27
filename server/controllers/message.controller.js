export const sendMessage = async (req, res) => {
  try {
    console.log("message sent", req.params.id);
  } catch (error) {
    console.log("Error in sendMessage Controller: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
