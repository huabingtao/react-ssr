import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'
export default function AuthStatus () {
  let auth = useAuth()
  let navigate = useNavigate()

  return (
    <div>
      { auth.user ? (
        <div>
           Welcome {auth.user}!{" "}
           <button onClick={()=>{
            auth.signout(()=>{
              navigate('/')
            })
           }}>Sign out</button>
        </div>
      ): <p>You are not logged in.</p> }
    </div>
  )
}