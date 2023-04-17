import { Link } from "react-router-dom";

function RestaurantScreen() {
    return (
        <div>
            <h1>Restaurant Finder</h1>
            <Link to="/restaurant/search">Search</Link>
        </div>
    );
}

export default RestaurantScreen;