/* eslint-disable react/prop-types */
import useConversation from "../../zustand/useConversation";
import "./sidebar.css";


const Conversation = ({conversation, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div onClick={() => setSelectedConversation(conversation)} className={`flex justify-between rounded-md items-center w-full pr-10 ${isSelected? "bg-[#724ff9] text-white": ""}`}>
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
