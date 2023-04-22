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
      alert("Please log in first!");
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
    console.log(searchResults)
    navigate(`/search/${searchQuery}`);
  };
  return (
    <div className='p-5 container d-flex flex-column align-items-center'>
      <div>
        <input type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />
        <button className='btn btn-warning ms-4 ' onClick={handleSearch}> search</button>

      </div>
 
      <ul className='list-group'>
        {searchResults.length != 0 ? (
          searchResults.map((dish) => {
            return (
              <li className="list-group-item">
                {dish.name}
                <button
                  onClick={() => navigate(`/details/dish/${dish._id}`)}
                  className="btn btn-warning me-2 float-end"
                >
                  Detail
                </button>
              </li>
            );
          })
        ) : (
          <div>No results</div>
        )}
      </ul>
    </div>
  );
}
