import React from 'react';
// import { getDogsById } from '../../services/DogRoute';
// import { updateDog } from '../../services/DogRoute';

export default function DogForm({
  name,
  setName,
  bio,
  setBio,
  image,
  setImage,
  age,
  setAge,
  breed,
  setBreed,
  handleSubmit,
}) {
  return (
    <div className="dog-form">
      <form>
        <h2>Enter Dog Details</h2>
        <div className="form-control">
          <label>Name: </label>
          <input
            className="name"
            placeholder="..."
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Bio: </label>
          <textarea
            className="name"
            placeholder="..."
            type="text"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Age: </label>
          <input
            className="name"
            placeholder="    ..."
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Breed: </label>
          <input
            className="name"
            placeholder="..."
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Image: </label>
          <input
            className="name"
            placeholder="..."
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <button onClick={handleSubmit}>Add</button>
        </div>
      </form>
    </div>
  );
}
