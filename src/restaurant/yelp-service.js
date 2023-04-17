import axios from 'axios';

const API_KEY = 'VwoNNTh0m6d4Cq3ntPEalcrkse6TkSGpeZ8f6SrfUvRATui9DYqLJrKCwKpYLuD5z9OhTCSHfYx-J0Iue0RRWT2el_Dto5Jsgq36TiWYI7wa-njMnZyYrPt7LLY8ZHYx';

const YELP_API = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-type': 'application/json',
  },
});

export const searchRestaurants = async (location, term) => {
  try {
    const response = await YELP_API.get('/businesses/search', {
      params: {
        location,
        term,
      },
    });
    return response.data.businesses;
  } catch (error) {
    console.error(error);
  }
};

export const getRestaurantDetails = async (id) => {
  try {
    const response = await YELP_API.get(`/businesses/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
