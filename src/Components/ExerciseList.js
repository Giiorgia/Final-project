import React from 'react';
import ExerciseItem from './ExerciseItem';

const ExerciseList = ({ exercises }) => {
    console.log('Exercises:', exercises); // Debugging statement

  return (
    <div className='Cards'>
      {exercises.map((exercise, index) => (
        <ExerciseItem key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;