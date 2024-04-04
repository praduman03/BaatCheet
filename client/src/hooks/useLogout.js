import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    const logoutApi = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
            });
            const data = await res.json();

            if(!res.ok){
                toast.error(data.message);
            }
            toast.success(data.message);
            localStorage.removeItem("baatcheet");
            setAuthUser(null);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {loading, logoutApi};
}

export default useLogout