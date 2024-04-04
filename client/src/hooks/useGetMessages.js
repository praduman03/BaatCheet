import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand/useConversation"

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation()
    console.log("selectedConversation",selectedConversation)

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`,{
                    method:"POST"
                });
                const data = await res.json();
                if(!res.ok){
                    toast.error(data.message);
                }
                setMessages(data);
                console.log("testing",data)
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false)
            }
        }
        if(selectedConversation?._id) getMessages();
    },[selectedConversation?._id, setMessages])
    return {loading, messages}
}

export default useGetMessages
