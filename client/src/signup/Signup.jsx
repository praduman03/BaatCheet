import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <img src={logo} className="logo" alt="" />
      <div className="login-container">
        <div className="login-model">
          <h2>Create an Account</h2>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="flex justify-start items-center w-11/12 gap-8">
            <div className="flex justify-between items-center radio-button gap-4 p-3">
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label htmlFor="css">Male</label>
            </div>
            <div className="flex justify-between items-center gap-4 p-3">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label htmlFor="html">Female</label>
            </div>
          </div>

          <button>Create Account</button>
          <p>
            Have an account? &nbsp;
            <Link className="link" to={"/login"}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
