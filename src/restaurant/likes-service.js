// Importing the axios library
import axios from "axios";

// Declaring the API URLs
const SEARCH_API = "https://api.yelp.com/v3/businesses/search";
const API_KEY = "VwoNNTh0m6d4Cq3ntPEalcrkse6TkSGpeZ8f6SrfUvRATui9DYqLJrKCwKpYLuD5z9OhTCSHfYx-J0Iue0RRWT2el_Dto5Jsgq36TiWYI7wa-njMnZyYrPt7LLY8ZHYx";

// Defining search function for fetching restaurant data based on user input
const USERS_API = "http://localhost:4000/api/users";

export const findLikesByUserId = async (userId) => {
  const response = await axios.get(`${USERS_API}/${userId}/likes`);
  return response.data;
};

export const searchRestaurants = async (searchTerm, location) => {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };
  const params = {
    term: searchTerm,
    location: location,
  };
  const response = await axios.get(SEARCH_API, {
    headers: headers,
    params: params,
  });
  return response.data.businesses;
};



