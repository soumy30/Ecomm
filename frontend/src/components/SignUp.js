import React from 'react'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
  const[name, setName]=useState("");
  const[password, setPassword]=useState("");
  const[email, setEmail]=useState("");
  const navigate = useNavigate();


  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
      navigate('/')
    }
  })

  const collectData = async ()=>{
    console.log(name, email, password);
    let result = await fetch('http://localhost:5000/register',{
      method:'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate('/')
    
  }
  return (
    <div className='register'>
      <h1>SignUp page</h1>
      
      <input className='inputBox' type='text' value={name} 
      onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>

      <input className='inputBox' type='text' value={email} 
      onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your E-mail'/>
      
      <input className='inputBox' value={password}
      onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your Password'/>
      
      <button onClick={collectData} className='appButton'>SignUp</button>
    </div>
  )
}

export default SignUp