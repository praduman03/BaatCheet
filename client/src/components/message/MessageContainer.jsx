import "./message.css";
import Messages from "./Messages";
import { IoSend } from "react-icons/io5";

const MessageContainer = () => {
  return (
    <div className="message-container">
      <div className="flex items-center">
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nvlmwygLKlmp7aC6rEIPSgNEcTLbi1TV5P1gVU-LSwImRRp9CzMZywB1PPC9JjeFWNU"
          alt=""
        />
        <h2> Sam Edwards</h2>
      </div>
      <hr />
      <Messages />
      <div className="message-input-div">
        <input className="message-input" type="text" />
        <button className="message-input-send">
          <IoSend size={30} color="#724ff9" />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
