import React from 'react';

export default function Dogs({ name, image, breed, bio, age, showDetail = false }) {
  const getClassName = () => {
    return {};
  };
  const getAge = () => {
    if (age === 0) {
      return 'less than 1';
    } else {
      return `${age}`;
    }
  };
  return (
    <div className={getClassName()}>
      <h3>{name}</h3>
      <img src={image} />
      <p>
        {name} is {getAge()}, and is a {breed}
      </p>
      {showDetail && (
        <div className="details">
          <p>{bio}</p>
        </div>
      )}
      )
    </div>
  );
}
