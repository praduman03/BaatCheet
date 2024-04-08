import Conversation from "./Conversation";
import  useGetConversations  from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis"

const Conversations = () => {
  const  {loading, conversations} = useGetConversations();
  return (
    loading? <span className="loading loading-spinner h-full"></span>:
    <div className="w-full overflow-auto">
      { conversations && conversations.map((conversation) => 
        
        <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()}/>
        
      )}
    </div>
  );
};

export default Conversations;
