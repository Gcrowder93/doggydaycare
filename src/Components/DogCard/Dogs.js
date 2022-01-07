import { Link } from 'react-router-dom';
import React from 'react';

export default function Dogs({ id, name, bio, image, age, breed /*handleDelete*/ }) {
  return (
    <div className="dogs">
      <h2> {name} </h2>
      <img alt="dog" src={image}></img>
      <h3>
        {age} year old. {breed}
      </h3>
      <h2> {bio} </h2>
      <Link to={`/dogs/${id}/DogEdit`}>Edit</Link>
      <br></br>
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
}
