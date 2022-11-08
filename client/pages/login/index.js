import * as React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../components/AuthProvider';

export default function Login (){
  
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()
  
  let from = location.state?.from?.pathname || "/";
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let username = formData.get('username')
    auth.signin(username,()=>{
      console.log('from:',from);
      navigate(from, { replace: true });
    })
    console.log('formData:',formData);
  }


  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}