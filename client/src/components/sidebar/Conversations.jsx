import Conversation from "./Conversation";
import  useGetConversations  from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis"

const Conversations = () => {
  const  {loading, conversations} = useGetConversations();
  return (
    <div className="w-full overflow-auto">
      {/* {loading? <span className="loading loading-spinner h-full"></span>: null} */}
      { conversations ? conversations.map((conversation) => 
        
        <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()}/>
        
      ): <p>no conversation</p>}
    </div>
  );
};

export default Conversations;
