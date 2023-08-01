import React from 'react';

const CarList = () => {
  const cars = [
    { make: 'Honda', model: 'Vezel', condition: 'New', price: 2000 },
    { make: 'Honda', model: 'Civic', condition: 'Used', price: 3000 },
  ];

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.make} {car.model} - {car.condition} - ${car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;