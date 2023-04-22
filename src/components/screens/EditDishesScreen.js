import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  findAllDishesThunk,
  createDishThunk,
  updateDishThunk,
} from "../../services/dishes/dishes-thunks";

function EditDishesScreen() {
  const [dishes, setDishes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const { dishes: dbDishes } = useSelector((state) => state.dishes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllDishesThunk());
  }, [dispatch]);

  useEffect(() => {
    setDishes(dbDishes);
  }, [dbDishes]);

  const handleDishChange = (index, field, value) => {
    const newDishes = [...dishes];
    newDishes[index] = {
      ...dishes[index],
      [field]: value,
    };
    setDishes(newDishes);
  };

  const handleIngredientsChange = (dishIndex, ingredientIndex, value) => {
    const newDishes = [...dishes];
    newDishes[dishIndex].ingredients = [...newDishes[dishIndex].ingredients];
    newDishes[dishIndex].ingredients[ingredientIndex] = value;
    setDishes(newDishes);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    if (editIndex !== null) {
      dispatch(updateDishThunk(dishes[editIndex]));
      setEditIndex(null);
    }
  };
  const [newDishName, setNewDishName] = useState("");
  const [newDishChef, setNewDishChef] = useState("");
  const [newDishIngredients, setNewDishIngredients] = useState("");
  const [newDishDescription, setNewDishDescription] = useState("");
  const [newDishPrice, setNewDishPrice] = useState(0);

  const handleAddNewDish = async () => {
    const newDish = {
      name: newDishName,
      ingredients: newDishIngredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      chef: newDishChef,
      description: newDishDescription,
      price: newDishPrice,
    };
    await dispatch(createDishThunk(newDish));
    setNewDishName("");
    setNewDishChef("");
    setNewDishIngredients("");
    setNewDishDescription("");
    setNewDishPrice(0);
    await dispatch(findAllDishesThunk());
  };

  const renderDish = (dish, index) => {
    const isEditing = index === editIndex;

    return (
      <li key={index}>
        <h3>
          {isEditing ? (
            <input
              type="text"
              value={dish.name}
              onChange={(event) =>
                handleDishChange(index, "name", event.target.value)
              }
            />
          ) : (
            dish.name
          )}
        </h3>
        <div>
          Chef:{" "}
          {isEditing ? (
            <input
              type="text"
              value={dish.chef}
              onChange={(event) =>
                handleDishChange(index, "chef", event.target.value)
              }
            />
          ) : (
            dish.chef
          )}
        </div>
        <div>Ingredients:</div>
        <ul>
          {dish.ingredients.map((ingredient, ingredientIndex) => (
            <li key={ingredientIndex}>
              {isEditing ? (
                <input
                  type="text"
                  value={ingredient}
                  onChange={(event) =>
                    handleIngredientsChange(
                      index,
                      ingredientIndex,
                      event.target.value
                    )
                  }
                />
              ) : (
                ingredient
              )}
            </li>
          ))}
        </ul>
        <div>
          Description:{" "}
          {isEditing ? (
            <textarea
              value={dish.description}
              onChange={(event) =>
                handleDishChange(index, "description", event.target.value)
              }
            />
          ) : (
            dish.description
          )}
        </div>
        <div>
          Price:{" "}
          {isEditing ? (
            <input
              type="number"
              value={dish.price}
              onChange={(event) =>
                handleDishChange(index, "price", event.target.value)
              }
            />
          ) : (
            dish.price
          )}
        </div>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={() => handleEditClick(index)}>Edit</button>
        )}
      </li>
    );
  };

  return (
    <>
      <div>
        <h2>Dishes</h2>
        <ul>{dishes.map(renderDish)}</ul>
        <div>
          <h3>Create New Dish</h3>
          <div>
            Name:{" "}
            <input
              type="text"
              value={newDishName}
              onChange={(event) => setNewDishName(event.target.value)}
            />
          </div>
          <div>
            Chef:{" "}
            <input
              type="text"
              value={newDishChef}
              onChange={(event) => setNewDishChef(event.target.value)}
            />
          </div>
          <div>
            Ingredients (comma-separated):{" "}
            <input
              type="text"
              value={newDishIngredients}
              onChange={(event) => setNewDishIngredients(event.target.value)}
            />
          </div>
          <div>
            Description:{" "}
            <textarea
              value={newDishDescription}
              onChange={(event) => setNewDishDescription(event.target.value)}
            />
          </div>
          <div>
            Price:{" "}
            <input
              type="number"
              value={newDishPrice}
              onChange={(event) => setNewDishPrice(event.target.value)}
            />
          </div>
          <button onClick={handleAddNewDish}>Add New Dish</button>
        </div>
      </div>
    </>
  );
}

export default EditDishesScreen;
