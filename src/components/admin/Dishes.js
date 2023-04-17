import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {findAllDishsThunk, deleteDishThunk, updateDishThunk} from '../../services/dishes/dishes_thunks'

export default function Dishes() {
    const { dishes } = useSelector((state) => state.dishes) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllDishsThunk())
    },[])

    const handleDishInfoClick = (dishId) => {
        console.log(`Displaying information for dish with id: ${dishId}`)
    }

    const handleDeleteDishClick = (dishId) => {
        dispatch(deleteDishThunk(dishId))
    }

    const handleUpdateDishClick = (dish) => {
        const updatedDish = { ...dish, price: dish.price + 1000 }
        dispatch(updateDishThunk(updatedDish))
    }

    return (
        <div>
            <h2>Dishes</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {dishes.map((dish) => (
                        <tr key={dish.id}>
                            <td>{dish.id}</td>
                            <td>{dish.name}</td>
                            <td>{dish.price}</td>
                            <td>{dish.category}</td>
                            <td>
                                <button onClick={() => handleDishInfoClick(dish.id)}>Check Dish Info</button>
                                <button onClick={() => handleDeleteDishClick(dish.id)}>Delete</button>
                                <button onClick={() => handleUpdateDishClick(dish)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
