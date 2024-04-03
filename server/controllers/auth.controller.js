import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenandSetCookie from "../utils/generateToken.utils.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password, gender } = req.body;

    const [existingUser, isEmailTaken] = await Promise.all([
      User.findOne({ username }),
      User.findOne({ email }),
    ]);
    
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    } else if (isEmailTaken) {
      return res.status(400).json({ message: "Email address is already in use" });
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

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    //username can be username or email

    const user = await User.findOne({
      $or: [{ username }, { email: username }]
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: `User ${username} does not exist` });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //generate JWT token
    generateTokenandSetCookie(user._id, res);

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    console.log("Error in Login Controller: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log("Error in Logout Controller: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
