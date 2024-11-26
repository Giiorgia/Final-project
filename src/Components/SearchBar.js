import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [muscleGroup, setMuscleGroup] = useState('');

  const handleInputChange = (e) => {
    setMuscleGroup(e.target.value);
  };

  const handleSearch = () => {
    onSearch(muscleGroup);
  };

  return (
    <div className='SearchBar'>
      <input className='MuscleInput'
        type="text"
        placeholder="Enter muscle group"
        value={muscleGroup}
        onChange={handleInputChange}
      />
      <button className='SearchButton' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;