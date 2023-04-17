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
      <div className='p-5'>
          <div className='row'>
            <h4 className={""}><b>Edit profile</b></h4>
          </div>

          <div>
              <textarea onChange={(e) => {setFirstName(e.target.value)}} 
                className={"w-100 mt-4"} placeholder={`First Name\n${currentUser.firstName}`}/>
              <textarea onChange={(e) => {setLastName(e.target.value)}} 
                className={"w-100 mt-4"} placeholder={`Last Name\n ${currentUser.lastName}`}/>
              <textarea onChange={(e) => {setBirth(e.target.value)}} 
                className={"w-100 mt-4"} placeholder={`Date of Birth\n${currentUser.dateOfBirth}`}/>
              <textarea onChange={(e) => {setEmail(e.target.value)}}
                className={"w-100 mt-4"} placeholder={`Email\n${currentUser.email}`}/>
              <textarea onChange={(e) => {setPhone(e.target.value)}}
                 className={"w-100 mt-4"} placeholder={`Phone\n${currentUser.phone}`}/>
         </div>
      
          <div className='row'>
              <button onClick={handleSave} className={"rounded-pill btn border mt-4 font-weight-bold"}><b>Save</b></button>
              <Link to="/profile" className={"rounded-pill btn border  mt-4 font-weight-bold" }><b>Cancel</b></Link>
          </div>
      </div>
  )
}
