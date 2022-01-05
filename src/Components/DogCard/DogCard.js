import React from 'react';
import { Link } from 'react-router-dom';

export default function DogCard({ dog }) {
  return (
    <div className="dog-card">
      {dog.map(({ id, name, image, breed }) => (
        <Link to={`/dogs/${id}`} key={id}>
          <h2>{name}</h2>
          <img alt="dog" src={`${image}`}></img>
          <p>{breed}</p>
        </Link>
      ))}
    </div>
  );
}
