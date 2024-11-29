// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ExerciseList from './Components/ExerciseList';
import Footer from './Components/Footer';

//const API_KEY = 'FxFPZ8SyUtJvVlDfBhEwOw==GB017hfqZfdEKKf5'; // Replace with your actual API key
//const API_URL = 'https://api.api-ninjas.com/v1/exercises';
const API_URL = './info.json'
const App = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (muscleGroup) => {
    setLoading(true);
    setError(null);

    fetch(API_URL)
     .then( res => res.json())
     .then(data => {
       console.log(data.exercises[muscleGroup]);

       setExercises(data.exercises[muscleGroup]);
       setLoading(false);
  })
  };

  return (
    <div className='Fitness_App'>
      <Header/>
      {/* <h2 className="AppName">What muscle you want to train?</h2> */}
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ExerciseList exercises={exercises} />
      )}
      <Footer/>
    </div>
  );
};

export default App;
