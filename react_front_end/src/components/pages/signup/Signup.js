import React from 'react'
import './Signup.css'
import { useState } from 'react';
import axios from 'axios';


export default function Signup() {

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
		  const res = await axios.post("/auth/register", {
			username,
			email,
			password,
		  });
		  res.data && window.location.replace("/login");
		  console.log(res)
		} catch (err) {
		  setError(true);
		}
	  };




  return (
    <div>
        <div class="login-box ">
	<h2>Sign Up</h2>
	<form action="" onSubmit={handleSubmit}>
		<div class="user-box">
			<input 
			type="text" 
			onChange={(e) => setUsername(e.target.value)}
			/>
			<label>UserName</label>
		</div>

        <div class="user-box">
			<input
			 type="text"
			 onChange={(e) => setEmail(e.target.value)}
			/>
			<label for="">Email</label>
		</div>
		<div class="user-box">
			<input 
			type="password"
			onChange={(e) => setPassword(e.target.value)}
			/>
			<label for="">Password</label>
		</div>
		<a >
		<button className='c h6 fw-bold'>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			SIGN UP
		
		</button>
		</a>
		<div></div>
		{error && <span className='text-danger'>Please enter valid values!</span>}
	</form>
</div>

      
    </div>
  )
}
