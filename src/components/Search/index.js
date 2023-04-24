import React, { useState, useEffect } from "react";
import { findDishesByKeyword } from "../../services/dishes/dishes-service";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../services/auth/auth-thunks";
import { isAuthenticated } from "../../services/auth/auth-service";

export default function SearchPage() {
  const { currentAccount } = useSelector((state) => state.accounts);
  const { searchItem } = useParams();
  const [searchQuery, setSearchQuery] = useState(searchItem);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentAccount) {
      const data = isAuthenticated();
      if (!data) {
        alert("Please Login");
        navigate("/login");
      } else {
        const username = data.username;
        const password = data.password;
        dispatch(loginThunk({ username, password }));
      }
    } else {
      if (searchItem) {
        handleSearch();
      }
    }
  }, [currentAccount, navigate, searchItem]);

  const handleSearch = async () => {
    const response = await findDishesByKeyword(searchQuery);
    setSearchResults(response);
    navigate(`/search/${searchQuery}`);
  };
  return (
    <div className="p-5">
      <div>
        <input type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />
        <button className='btn btn-warning ms-4 ' onClick={handleSearch}> search</button>
      </div>
      <ul className="list-group mt-5">
        {searchResults ? (
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
          <div>Loading</div>
        )}
      </ul>
    </div>
  );
}
