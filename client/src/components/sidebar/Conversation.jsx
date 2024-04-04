/* eslint-disable react/prop-types */
import useConversation from "../../zustand/useConversation";
import "./sidebar.css";
// import PropTypes from "prop-types";


const Conversation = ({conversation, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div onClick={() => setSelectedConversation(conversation)} className={`flex justify-between items-center w-11/12 ${isSelected? "bg-sky-500": ""}`}>
      <div className="flex items-center">
        <img
          className="avatar"
          src={conversation.profileImage || null}
          alt=""
        />
        <h2> {conversation.fullName || null}</h2>
      </div>
      <span>{emoji}</span>
    </div>
  );
};

export default Conversation;
