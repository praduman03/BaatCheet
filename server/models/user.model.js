import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: "Full Name is required"
    },
    username: {
      type: String,
      required: "Username is required",
      unique: true
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true
    },
    password: {
      type: String,
      required: "Password is required",
      minlength: 6
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"]
    },
    profileImage: {
      type: String,
      default: ""
    }
  },
  //ToDo we can use createdAt and updatedAt fields to show -> member since XX/XX date
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
