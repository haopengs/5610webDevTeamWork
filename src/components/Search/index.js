import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(`/api/search?q=${searchQuery}`)
      .then(response => setSearchResults(response.data))
      .catch(error => console.error(error));
  }, [searchQuery]);

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
