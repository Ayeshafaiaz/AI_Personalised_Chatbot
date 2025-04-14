import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useUserStore } from "./stores/userStore";
import { useEffect } from "react";

export const Template = ()=>{
    const user = useUserStore((state) => state);
    const navigate = useNavigate()
    const location = useLocation().pathname
    useEffect(() => {
        if(!user.accessToken || location === "/login" || location==="/signup"){ 
            console.log("hh")
            navigate("/login")
        }
        },[user])
    return (<Outlet/>)
}