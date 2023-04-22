import React from 'react'
import { useState } from 'react';
import { findDishesByKeyWord } from '../../services/dishes/dishes_service';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function SearchPage() {
  const { searchItem } = useParams();
  const [searchQuery, setSearchQuery] = useState(searchItem);
  const [searchResults, setSearchResults] = useState([]);
  
  const navigate = useNavigate()
  useEffect(() => {
    if (searchItem) {
      handleSearch();
    }
  }, [searchItem]);

  const handleSearch =  async() => {
    const response = await findDishesByKeyWord(searchQuery)
    setSearchResults(response)
    navigate(`/search/${searchQuery}`)
  };
  return (
    <div className='p-5 container d-flex flex-column align-items-center'>
      <div>
        <input type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />
        <button className='btn btn-warning ms-4 ' onClick={handleSearch}> search</button>

      </div>
 
      <ul className='list-group'>
        {searchResults ? (
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
          ):(<div>Loading</div>)}
      </ul>
    </div>
  )
}
