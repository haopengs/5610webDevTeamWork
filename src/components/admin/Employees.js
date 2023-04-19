import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { findAllEmployeesThunk, deleteEmployeeThunk, updateEmployeeThunk } from '../../services/employees/employees_thunks'
import {useNavigate} from 'react-router-dom'

export default function Employees() {
  const {employees} = useSelector((state) => state.employees)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(findAllEmployeesThunk())
  },[])

  const handleEmployeeInfoClick = (employeeId) => {
    navigate(`/profile/${employeeId}`);
  }

  const handleDeleteEmployeeClick = (employeeId) => {
    dispatch(deleteEmployeeThunk(employeeId))
  }

  const handleUpdateEmployeeClick = (employee) => {
    const updatedEmployee = { ...employee, salary: employee.salary + 1000 } 
    dispatch(updateEmployeeThunk(updatedEmployee))
  }

  return (
    <div>
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => handleEmployeeInfoClick(employee.id)}>Check Employee Info</button>
                <button onClick={() => handleDeleteEmployeeClick(employee.id)}>Delete</button>
                <button onClick={() => handleUpdateEmployeeClick(employee)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
