import React from 'react';
import { Link } from 'react-router-dom';

export default function DogCard({ id, name, image, breed }) {
  return (
    <div className="dog-card">
      <Link to={`/dogs/${id}`} key={id}>
        <h2>{name}</h2>
        <img alt="dog" src={`${image}`}></img>
        <p>{breed}</p>
      </Link>
    </div>
  );
}
