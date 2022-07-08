import './Login.css';

import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from '../../../context/Context';


export default function Login() {

	const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
	  if(res.data === "Wid")
	  {
		  window.alert("Invalid User Name")
	  }
	  else if(res.data === "WP")
	  {
		  window.alert("Wrong Password")
	  }
   else
    {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
	}

    }
	 catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
   
  return (
    
    <div >
     
      <div class="login-box ">
	<h2>Login</h2>
	<form onSubmit={handleSubmit}>
		<div class="user-box">
			<input type="text" name=""  ref={userRef} required />
			<label>Username</label>
		</div>
		<div class="user-box">
			<input type="password"  ref={passwordRef} required/>
			<label for="">Password</label>
		</div>
		<a>
			<button className='c h6 fw-bold' type="submit">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			LOG IN

			</button>
		</a>
	</form>
</div>





        

    </div>
        
  )
}
