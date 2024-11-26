// src/components/ExerciseItem.js
import React, {useState} from 'react';

const ExerciseItem = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <div className='Exercise_Card'>
      <div className='Card_Info'>
      <h3 className='Exercise_Title'>{exercise.name}</h3>
      <img className='Card_Image'src={exercise.img}/>
      <p>{exercise.level}</p>
      <p className={`instructions ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? exercise.instructions : `${exercise.instructions.slice(0, 100)}...`}
        </p>
      </div>
      <button className='card_button' onClick={toggleExpand}>
        {isExpanded ? 'See less' : 'See more'}
      </button>
    </div>
  );
};

export default ExerciseItem;