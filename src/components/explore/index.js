import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  findAllDishesThunk,
  createDishThunk,
} from "../../services/dishes/dishes-thunks";

const FoodSearch = () => {
  const { currentAccount } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);

  const searchFood = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.meals);
    setSearchText("");
  };

  const loadDetails = async (mealID) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    );
    const data = await response.json();
    setMealDetails(data.meals[0]);
  };

  const handleAddToRecipe = (meal) => {
    setNewRecipeName(meal.strMeal);
    setNewRecipeIngredients(
      meal.strIngredient1 +
        ", " +
        meal.strIngredient2 +
        ", " +
        meal.strIngredient3 +
        ", " +
        meal.strIngredient4 +
        ", " +
        meal.strIngredient5
    );
    setNewRecipeDescription(meal.strInstructions);
  };

  const [newRecipeName, setNewRecipeName] = useState("");
  const [newRecipeIngredients, setNewRecipeIngredients] = useState("");
  const [newRecipeChef, setNewRecipeChef] = useState("");
  const [newRecipeDescription, setNewRecipeDescription] = useState("");
  const [newRecipePrice, setNewRecipePrice] = useState(0);

  const handleAddNewRecipe = async () => {
    const newRecipe = {
      name: newRecipeName,
      ingredients: newRecipeIngredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      chef: newRecipeChef,
      description: newRecipeDescription,
      price: newRecipePrice,
      image: "default.jpeg",
      cookId: currentAccount._id,
    };
    await dispatch(createDishThunk(newRecipe));
    setNewRecipeName("");
    setNewRecipeChef("");
    setNewRecipeIngredients("");
    setNewRecipeDescription("");
    setNewRecipePrice(0);
    await dispatch(findAllDishesThunk());
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <img src="https://www.themealdb.com/images/logo-small.png" alt="logo" />
      </div>
      <div className="d-flex justify-content-center mb-4">
        <input
          id="input_field"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control w-50 me-3"
          placeholder="Search any Food😎😎"
        />
        <button className="btn btn-warning" type="button" onClick={searchFood}>
          Search
        </button>
      </div>
      {/* single meal details */}
      <div id="meal_details">
        {mealDetails && (
          <div className="d-flex mt-12">
            <div className="card text-white bg-dark p-3 d-flex">
              <div className="overflow-hidden">
                <img
                  src={mealDetails.strMealThumb}
                  className="card-img-top"
                  alt="food"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{mealDetails.strMeal}</h5>
                <p className="card-text">
                  {mealDetails.strInstructions.slice(0, 200)}
                </p>
                <div className="d-flex mt-3">
                  <span className="badge bg-warning me-2">
                    {mealDetails.strCategory}
                  </span>
                  <span className="badge bg-warning">
                    {mealDetails.strTags}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* search meal */}
        <div className="row mt-5">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="col-lg-4 col-md-6 mb-4">
              <div className="card text-white bg-dark">
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt="food"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{meal.strMeal}</h5>
                  {currentAccount &&
                  (currentAccount.role === "admin" ||
                    currentAccount.role === "cook") ? (
                    <>
                      <button
                        className="btn btn-warning mt-auto mb-2 w-100"
                        type="button"
                        onClick={() => loadDetails(meal.idMeal)}
                      >
                        See Details
                      </button>
                      <button
                        className="btn btn-warning mt-auto w-100"
                        type="button"
                        onClick={() => handleAddToRecipe(meal)}
                      >
                        Add to Recipe
                      </button>
                    </>
                  ) : (
                    <div className="alert alert-info">
                      Login as Cook to Add Recipes
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentAccount &&
      (currentAccount.role === "admin" || currentAccount.role === "cook") ? (
        <div className="row mt-5">
          <div className="col-lg-6 offset-lg-3">
            <div className="card text-white bg-dark">
              <div className="card-body">
                <h5 className="card-title">Add a New Recipe</h5>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={newRecipeName}
                    onChange={(e) => setNewRecipeName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ingredients" className="form-label">
                    Ingredients
                  </label>
                  <textarea
                    className="form-control"
                    id="ingredients"
                    rows="3"
                    value={newRecipeIngredients}
                    onChange={(e) => setNewRecipeIngredients(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="chef" className="form-label">
                    Chef
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="chef"
                    value={newRecipeChef}
                    onChange={(e) => setNewRecipeChef(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="5"
                    value={newRecipeDescription}
                    onChange={(e) => setNewRecipeDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={newRecipePrice}
                    onChange={(e) => setNewRecipePrice(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-warning w-100"
                  type="button"
                  onClick={handleAddNewRecipe}
                >
                  Add New Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-info mt-5">
          Login as Cook to Add New Recipes
        </div>
      )}
    </div>
  );
};

export default FoodSearch;
