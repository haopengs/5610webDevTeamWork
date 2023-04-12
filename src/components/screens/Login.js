import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../services/users/user_thunks'


export default function Login() {
    // const {error} = useSelector((state) => state.users)
    const error = useSelector((state) => state.users.error)
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const login = async() => {
        const check = await dispatch(loginThunk({ username, password }))
        console.log(check)
        if (check.error == null) {
            navigate('/profile')

            // if (check.payload.role == "ADMIN") {
            //     navigate('/admin')
            // } else if (check.payload.role == "USER") {
            //     navigate('/user')
            // }
        } else {
            alert("Please enter a correct usename or password")
        }
    }
    return (
        <div>
        <h1>Login</h1>
        <div className="form-group">
            <label>Username</label>
            <input
            type="text" className="form-control" value={username}
            onChange={(e) => {setUsername(e.target.value);}}
            />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" value={password}
            onChange={(e) => {setPassword(e.target.value);}}
            />
        </div>
        <button onClick={login} className="btn btn-primary mt-4">Login</button>
        <button onClick={() => navigate('/register')} className="btn btn-primary mt-4 ms-4">SignUp</button>

        </div>
    )
}
 