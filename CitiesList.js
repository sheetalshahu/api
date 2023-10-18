import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitiesList = ({ selectedState, handleCityChange }) => {
 const [cities, setCities] = useState([]);

 useEffect(() => {
    if (selectedState) {
      axios.get(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
        .then(response => {
          setCities(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
 }, [selectedState]);

 return (
    <select value={selectedState} onChange={handleCityChange}>
      <option value="">Select a city</option>
      {cities.map(city => (
        <option key={city.id} value={city.id}>{city.name}</option>
      ))}
    </select>
 );
};

export default CitiesList;