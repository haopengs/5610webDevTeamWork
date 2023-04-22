import React, { useState } from "react";

const FoodSearch = () => {
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
                  <button
                    className="btn btn-warning mt-auto w-100"
                    type="button"
                    onClick={() => loadDetails(meal.idMeal)}
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodSearch;
