import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { searchRestaurants } from "./yelp-service";

function YelpSearchScreen() {
    const { searchTerm } = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState(searchTerm);
    const [results, setResults] = useState([]);
    const searchYelp = async () => {
        const response = await searchRestaurants(search);
        setResults(response);
        navigate(`/yelp/search/${search}`);
    };
    useEffect(() => {
        if (searchTerm) {
            searchYelp();
        }
    }, [searchTerm]);
    return (
        <div>
            <h1>Yelp Search</h1>
            <button onClick={searchYelp} className="float-end btn btn-primary">
                Search
            </button>
            <input
                className="form-control w-75"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <h2>Businesses</h2>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                    <tr>
                        {results.map((business) => (
                            <td key={business.id}>
                                <Link to={`/yelp/business/${business.id}`}>
                                    <img
                                        src={business.image_url}
                                        alt={business.name}
                                        height="200px"
                                    />
                                    <h3>{business.name}</h3>
                                    <p>{business.location.display_address.join(", ")}</p>
                                </Link>
                            </td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>

            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
}

export default YelpSearchScreen;
