import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
 const [selectedCityName, setSelectedCityName] = useState('');
 const [selectedStateName, setSelectedStateName] = useState('');
 const { city, state } = useParams();

 useEffect(() => {
    axios.get(`http://api.minebrat.com/api/v1/states/${state}`)
      .then(response => {
        setSelectedStateName(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`http://api.minebrat.com/api/v1/states/cities/${city}`)
      .then(response => {
        setSelectedCityName(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
 }, [city, state]);

 return (
    <div>
      <h1> You have selected
        {selectedCityName}, {selectedStateName}
      </h1>
    </div>
 );
};

export default Result;