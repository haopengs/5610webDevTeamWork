import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUserThunk } from '../../services/users/user_thunks'

export default function SignUp() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signUp = () => {
        dispatch(createUserThunk({firstName, lastName, username, password, birthday, phone, email, role }))
        navigate('/login')
    }

    return (
        <div className='p-5'>
            <h1>SignUp</h1>
            <div className="mt-4 ">
                <label>First Name</label>
                <input
                type="text" className="form-control" value={firstName}
                onChange={(e) => {setFirstName(e.target.value);}}
                />
            </div>
            <div className="mt-4">
                <label>Last Name</label>
                <input
                type="text" className="form-control" value={lastName}
                onChange={(e) => {setLastName(e.target.value);}}
                />
            </div>
            <div className="mt-4 ">
                <label>Username</label>
                <input
                type="text" className="form-control" value={username}
                onChange={(e) => {setUsername(e.target.value);}}
                />
            </div>
            <div className="mt-4 ">
                <label>Password</label>
                <input type="password" className="form-control" value={password}
                onChange={(e) => {setPassword(e.target.value);}}
                />
            </div>
            <div className="mt-4 ">
                <label>Birthday</label>
                <input type="date" className="form-control" 
                onChange={(e) => {setBirthday(e.target.value);}}
                />
            </div>
            <div className="mt-4 ">
                <label>Phone Number</label>
                <input type="text" className="form-control" 
                onChange={(e) => {setPhone(e.target.value);}}
                />
            </div>
            <div className="mt-4 ">
                <label>Email</label>
                <input type="email" className="form-control" 
                onChange={(e) => {setEmail(e.target.value);}}
                />
            </div>
            <div className='mt-4'>
                Role
            </div>
                <div className="form-group">
                <input type="radio" className=''  name="role" onChange={() => {setRole("cook")} }/> User
                <input type="radio" className='ms-5'  name="role" onChange={() => {setRole("cook")} }/> Cook
                <input type="radio" className='ms-5' name="role" onChange={() => {setRole("cook")} }/> Waiter
            </div>
            
            <button onClick={signUp} className="btn btn-warning mt-4 ">SignUp</button>
            <button onClick={() => navigate('/login')} className="btn btn-warning mt-4 ms-4">Login</button>

        </div>
    )
}
