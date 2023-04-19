import React, { useState } from 'react';

const initialDishes = [
  {
    name: 'Spaghetti Carbonara',
    ingredients: ['pasta', 'eggs', 'bacon', 'cheese'],
    chef: 'Gordon Ramsay'
  },
  {
    name: 'Beef Bourguignon',
    ingredients: ['beef', 'red wine', 'onions', 'carrots', 'mushrooms'],
    chef: 'Julia Child'
  },
  {
    name: 'Butter Chicken',
    ingredients: ['chicken', 'tomatoes', 'butter', 'cream'],
    chef: 'Vikas Khanna'
  }
];

function DishesList() {
  const [dishes, setDishes] = useState(initialDishes);
  const [editIndex, setEditIndex] = useState(null);

  const handleDishChange = (index, field, value) => {
    const newDishes = [...dishes];
    newDishes[index][field] = value;
    setDishes(newDishes);
  };

  const handleIngredientChange = (dishIndex, ingredientIndex, value) => {
    const newDishes = [...dishes];
    newDishes[dishIndex].ingredients[ingredientIndex] = value;
    setDishes(newDishes);
  };

  const handleEditClick = index => {
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    setEditIndex(null);
  };
  const [newDishName, setNewDishName] = useState('');
  const [newDishChef, setNewDishChef] = useState('');
  const [newDishIngredients, setNewDishIngredients] = useState('');

  const handleAddNewDish = () => {
    const newDish = {
      name: newDishName,
      ingredients: newDishIngredients.split(',').map(ingredient => ingredient.trim()),
      chef: newDishChef
    };
    setDishes([...dishes, newDish]);
    setNewDishName('');
    setNewDishChef('');
    setNewDishIngredients('');
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
              onChange={event =>
                handleDishChange(index, 'name', event.target.value)
              }
            />
          ) : (
            dish.name
          )}
        </h3>
        <div>
          Chef:{' '}
          {isEditing ? (
            <input
              type="text"
              value={dish.chef}
              onChange={event =>
                handleDishChange(index, 'chef', event.target.value)
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
                  onChange={event =>
                    handleIngredientChange(
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
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={() => handleEditClick(index)}>Edit</button>
        )}
      </li>
    );
  };

  return (
    <><div>
          <h2>Dishes</h2>
          <ul>{dishes.map(renderDish)}</ul>
          <div>
              <h3>Create New Dish</h3>
              <div>
                  Name:{' '}
                  <input
                      type="text"
                      value={newDishName}
                      onChange={event => setNewDishName(event.target.value)} />
              </div>
              <div>
                  Chef:{' '}
                  <input
                      type="text"
                      value={newDishChef}
                      onChange={event => setNewDishChef(event.target.value)} />
              </div>
              <div>
                  Ingredients (comma-separated):{' '}
                  <input
                      type="text"
                      value={newDishIngredients}
                      onChange={event => setNewDishIngredients(event.target.value)} />
              </div>
              <button onClick={handleAddNewDish}>Add New Dish</button>
          </div>
      </div><div>
              {/* <h2>Dishes</h2>
              <ul>{dishes.map(renderDish)}</ul> */}
          </div></>
  );
}

export default DishesList;
