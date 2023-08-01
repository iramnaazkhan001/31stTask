import React, { useState } from 'react';

const CAR_LIST = [
  { id: 1, make: "Mitsubishi", model: "Lancer", type: "Used" },
  { id: 2, make: "Honda", model: "Vezel", type: "New" },
  { id: 3, make: "Honda", model: "Civic", type: "Used" },
  { id: 4, make: "Audi", model: "A3", type: "New" },
  { id: 5, make: "Audi", model: "A4", type: "Used" },
  { id: 6, make: "Audi", model: "A7", type: "New" },
  { id: 7, make: "BMW", model: "i8", type: "Used" }
];

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState({ make: '', model: '' });
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchTerm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearch = () => {
    const filteredCars = CAR_LIST.filter(
      (car) =>
        car.make.toLowerCase().includes(searchTerm.make.toLowerCase()) &&
        car.model.toLowerCase().includes(searchTerm.model.toLowerCase())
    );
    setSearchResults(filteredCars);
  };

  return (
    <div>
      <h1>Car Search</h1>
      <div>
        <input
          type="text"
          name="make"
          value={searchTerm.make}
          placeholder="Enter make..."
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="model"
          value={searchTerm.model}
          placeholder="Enter model..."
          onChange={handleInputChange}
        />
        
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((car) => (
            <li key={car.id}>
              {car.make} {car.model} - {car.type}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default SearchBox;