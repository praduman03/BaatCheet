import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenandSetCookie from "../utils/generateToken.utils.js";

export const login = async (req, res) => {
  try {
  } catch (error) {}
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password, gender } = req.body;

    const user = await User.findOne({ username });
    //TODO add same for the email also but in the optimized way
    // *Important
    if (user) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    //Hash Password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profileImage =
      gender == "male"
        ? `https://avatar.iran.liara.run/public/boy?username=${username}`
        : `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      gender,
      profileImage
    });
    if (newUser) {
      //generate JWT token
      generateTokenandSetCookie(newUser._id, res);
    }

    await newUser.save();
    if (!newUser) {
      return res.status(400).json({ message: "User not created" });
    }
    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    console.log("Error in SignUp Controller: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = (req, res) => {
  res.send("Login");
};
