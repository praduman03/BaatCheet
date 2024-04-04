import { useEffect, useRef } from "react";
import Message from "./Message";
import  useGetMessages  from "../../hooks/useGetMessages"

const Messages = () => {
  const {loading, messages} = useGetMessages();
  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  console.log("message", messages)
  return (
    <div className="overflow-auto">
      {!loading && messages.length > 0 && messages.map((message) => <div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
    )}
    {loading && messages.length === 0 && <p className="text-center">Send a message to start the conversation</p>}
    </div>
  );
};

export default Messages;
