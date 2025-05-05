import { useEffect } from "react";
import { useToken } from "../hooks/useToken"
import { useNavigate } from "react-router-dom";

export default function UserPage() {
    const {state} = useToken()
    const navigate = useNavigate();

    useEffect(()=>{
      if(state.token===""){
        navigate("/login");
      }
    },[state.token,navigate])
    
    return (
      <div>Bienvenido</div>
    )
}
