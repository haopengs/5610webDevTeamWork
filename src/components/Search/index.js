import React, { useState, useEffect } from "react";
import { findDishesByKeyword } from "../../services/dishes/dishes-service";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const { currentAccount } = useSelector((state) => state.accounts);
  const { searchItem } = useParams();
  const [searchQuery, setSearchQuery] = useState(searchItem);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAccount) {
      navigate("/login");
    }
  }, [currentAccount, navigate]);

  useEffect(() => {
    if (searchItem) {
      handleSearch();
    }
  }, [searchItem]);

  const handleSearch = async () => {
    const response = await findDishesByKeyword(searchQuery);
    setSearchResults(response);
    navigate(`/search/${searchQuery}`);
  };
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button onClick={handleSearch}> search</button>
      <ul className="list-group">
        {searchResults ? (
          searchResults.map((dish) => {
            return (
              <li className="list-group-item">
                {dish.name}
                <button
                  onClick={() => navigate(`/dish/${dish._id}`)}
                  className="btn btn-warning me-2 float-end"
                >
                  Detail
                </button>
              </li>
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </ul>
    </div>
  );
}
