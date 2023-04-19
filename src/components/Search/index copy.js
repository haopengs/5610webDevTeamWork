import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { findDishesByKeyWord, findDishById } from '../../services/dishes/dishes_service';
import axios from 'axios';
const DISHES_API_URL = "http://localhost:4000/api/dishes";

function SearchPage() {
  const { searchItem } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({});

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (searchItem) {
  //     handleSearch();
  //   }
  // }, [searchItem]);

  const handleSearch =  () => {
    // const response = await findDishesByKeyWord("fish")
    const response =  axios.get(`${DISHES_API_URL}/11`).then((response) => response.data);
    console.log(response)
    setSearchResults(response)
    // navigate(`/search/${searchQuery}`)
  };

  return (
    <div>
      <form>
        <input type="text" value={searchQuery} onChange={(e) =>{setSearchQuery(e.target.value)}} />
        <button onClick={handleSearch}>Search</button>
        {searchItem}
      </form>
      <ul className='list-group'>
          {/* {searchResults && (
              searchResults.map((dish) => {
                  return (
                      <li className='list-group-item'>
                      {dish.name}
                       <button onClick={() => navigate(`/dish/${dish.id}`) } className="btn btn-warning me-2 float-end">
                          Detail
                      </button>
                      </li>
                  )
              }
              )   
          )} */}
        {/* {searchResults} */}
      </ul>
    </div>
  );
}

export default SearchPage;
