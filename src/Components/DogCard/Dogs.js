import { Link } from 'react-router-dom';
import React from 'react';

export default function Dogs({ id, name, bio, image, age, breed }) {
  return (
    <div className="dogs">
      <h2> {name} </h2>
      <img alt="dog" src={image}></img>
      <h3>
        {age} year old. {breed}
      </h3>
      <h2> {bio} </h2>
      <Link key={Dogs.id} to={`/dogs/${id}/DogEdit`}>
        Edit
      </Link>
      <br></br>
      <br></br>
    </div>
  );
}
