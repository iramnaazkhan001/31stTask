import React, { useState } from 'react';
import Clock from './Clock';
import CarList from './Carlist';
import CarSearch from './CarSearch';

const carData = [
  { make: 'Honda', model: 'Vezel', condition: 'New', price: 2000 },
  { make: 'Honda', model: 'Civic', condition: 'Used', price: 3000 },
 
];

const App = () => {
  const [filteredCars, setFilteredCars] = useState(carData);

  const handleSearch = (term) => {
    const filtered = carData.filter(
      (car) =>
        car.make.toLowerCase().includes(term.toLowerCase()) ||
        car.model.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div>
      <h5>Current Time: <Clock /></h5>
     
      <CarList cars={filteredCars} />
      <h2>CarSearch</h2>
      <CarSearch placeholder='Enter a car detail'  data={handleSearch}/>
    </div>
  );
};

export default App;