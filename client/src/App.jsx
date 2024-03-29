import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<h1>signup</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
