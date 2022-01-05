import React from 'react';
import { updateDog } from '../../services/DogRoute';

export default function DogForm(name, bio, image, age, breed, updateDog) {
  return (
    <div className="dog-form">
      <form>
        <h2>Enter Dog Details</h2>
        <div className="form-control">
          <label>Name: </label>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => {
              updateDog('name', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Bio: </label>
          <textarea
            placeholder="Bio"
            type="text"
            value={bio}
            onChange={(e) => {
              updateDog('bio', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Age: </label>
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => {
              updateDog('age', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Breed: </label>
          <input
            placeholder="Breed"
            type="text"
            value={breed}
            onChange={(e) => {
              updateDog('breed', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Image: </label>
          <input
            placeholder="Url"
            type="text"
            value={image}
            onChange={(e) => {
              updateDog('image', e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
}
