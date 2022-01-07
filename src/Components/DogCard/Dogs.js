import { Link } from 'react-router-dom';
import React from 'react';

export default function Dogs({ id, name, image, bio /*handleDelete*/ }) {
  return (
    <div className="dogs">
      <h2> {name} </h2>
      <img src={image}></img>
      <h2> {bio} </h2>
      <Link to={`/dogs/${id}/DogEdit`}>Edit</Link>
      <br></br>
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
}
