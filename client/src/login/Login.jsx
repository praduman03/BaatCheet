import "./Login.css";
import logo from "../assets/logo.png";
const Login = () => {
  console.log("login");
  return (
    <>
      <img src={logo} className="logo" alt="" />
      <div className="login-container">
        <div className="login-model">
          <h2>Welcome back</h2>
          <input type="text" placeholder="username or email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
          <p>{"Don't"} have an account? Sign Up</p>
        </div>
      </div>
    </>
  );
};

export default Login;
