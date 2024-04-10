import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  // res.cookie("jwt", token, {
  //   maxAge: 10 * 24 * 60 * 60 * 1000, // in ms
  //   httpOnly: true, //to prevent XSS attacks cross site scripting attacks
  //   sameSite: "lax", // CSRF attacks cross-site request forgery attacks
  //   secure: process.env.NODE_ENV !== "development" ? true : false,
  // });
  return token;
};

export default generateTokenandSetCookie;
