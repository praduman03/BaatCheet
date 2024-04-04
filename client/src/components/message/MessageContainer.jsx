import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import "./message.css";
import Messages from "./Messages";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();
  useEffect(() => {
  return() => {
    setSelectedConversation(null)
  }
}, [setSelectedConversation])


  if (!selectedConversation) {
    return <div className="message-container">hello</div>;
  }
  const handleSubmit = async() => {
    if(!message) return;
    await sendMessage(message)
    setMessage("");
  }

  return (
    <div className="message-container">
      <div className="flex items-center">
        <img
          className="avatar"
          src={ selectedConversation.profileImage || null}
          alt=""
        />
        <h2> {selectedConversation.fullName}</h2>
      </div>
      <hr />
      <Messages />
      <div className="message-input-div">
        <input className="message-input" type="text"  value={message} onChange={(e)=> setMessage(e.target.value)}/>
        <button onClick={handleSubmit} className="message-input-send">
          <IoSend size={30} color="#724ff9" />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
