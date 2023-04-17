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
            <img src={business.image_url} alt={business.name} />
            <p>Rating: {business.rating}</p>
            <p>Address: {business.location?.address1}, {business.location?.city}, {business.location?.state} {business.location?.zip_code}</p>
            <p>Phone: {business.phone}</p>
            <a href={business.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
    );
}

export default YelpBusinessDetailsScreen;
