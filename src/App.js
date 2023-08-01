import React from 'react';
import Clock from './Clock';
import CarList from './Carlist';
import CarSearch from './CarSearch';



const App = () => {
 

  return (
    <div>
      <h5>Current Time: <Clock /></h5>
     
      <CarList/>
      <CarSearch/>
    </div>
  );
};

export default App;