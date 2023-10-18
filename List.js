import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import CitiesList from './CitiesList';
// import Result from './Result';

const List = () => {
 const [states, setStates] = useState([]);
 const [selectedState, setSelectedState] = useState('');
 const [selectedCity, setSelectedCity] = useState('');
 const history = useHistory();

 useEffect(() => {
    axios.get('http://api.minebrat.com/api/v1/states')
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.log(error);
      });
 }, []);

 const handleStateChange = (event) => {
    setSelectedState(event.target.value);
 };

 const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
 };

 const handleSubmit = () => {
    history.push(`/result/${selectedCity}/${selectedState}`);
 };

 return (
    <div>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {states.map(state => (
          <option key={state.id} value={state.id}>{state.name}</option>
        ))}
      </select>
      <CitiesList selectedState={selectedState} handleCityChange={handleCityChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
 );
};

export default List;