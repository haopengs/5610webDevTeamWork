import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails } from "./yelp-service";

function YelpBusinessDetailsScreen() {
  const { id } = useParams();
  const [business, setBusiness] = useState({});
  const fetchBusiness = async () => {
    const response = await getRestaurantDetails(id);
    setBusiness(response);
  };
  useEffect(() => {
    fetchBusiness();
  }, []);
  return (
      <div>
        <h1>{business.name}</h1>
        <p>Rating: {business.rating}</p>
        <p>Address: {business.location && business.location.address1}</p>
        <p>Phone: {business.display_phone}</p>
        <pre>{JSON.stringify(business, null, 2)}</pre>
      </div>
  );
}

export default YelpBusinessDetailsScreen;
