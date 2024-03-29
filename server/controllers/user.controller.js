import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //* fetching all users data that is not equat to the logged in user
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    return res.status(201).json(allUsers);
  } catch (error) {
    console.log("Error in getUserForSidebar Controller: ", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};
