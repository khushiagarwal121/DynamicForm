import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=()=>{

    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}placeholder="username"></input>
      <input type="text" placeholder="password"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
