import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { updateUserThunk } from '../../services/users/user_thunks'

export default function EditProfile() {
    const { currentUser } = useSelector((state) => state.users)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [curUser, setCurUser] = useState(currentUser)
    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [birth, setBirth] = useState(currentUser.dateOfBirth)
    const [email, setEmail] = useState(currentUser.email)
    const [phone, setPhone] = useState(currentUser.phone)

    const handleSave = async () => {
        const updateUser = {
            ...curUser,
            "firstName": firstName,
            "lastName": lastName,
            "birth": birth,
            "email": email,
            "phone": phone,
        }

        setCurUser(updateUser)
        // console.log(updateUser)
        await dispatch(updateUserThunk(updateUser))
        navigate('/profile')

    }


  return (
      <div>
          <div>
            <span className={"ms-4"}><b>Edit profile</b></span>
            <Link to="/profile" className={"btn"}>Cancel</Link>
            <button onClick={handleSave} className={"btn"}>Save</button>
          </div>

          <div>
              <textarea onChange={(e) => {
                  setFirstName(e.target.value)
            }} className={"w-100"} placeholder={`First Name\n${currentUser.firstName}`}/>
              <textarea onChange={(e) => {
                  setLastName(e.target.value)
            }} className={"w-100"} placeholder={`Last Name\n ${currentUser.lastName}`}/>
              <textarea onChange={(e) => {
                  setBirth(e.target.value)
            } } className={"w-100 wd-textHeight mt-4"} placeholder={`Date of Birth\n${currentUser.dateOfBirth}`}/>
              <textarea onChange={(e) => {
                  setEmail(e.target.value)
            }} className={"w-100 mt-4"} placeholder={`Email\n${currentUser.email}`}/>
              <textarea onChange={(e) => {
                  setPhone(e.target.value)
            }} className={"w-100 mt-4"} placeholder={`Phone\n${currentUser.phone}`}/>
          </div>
      </div>
  )
}