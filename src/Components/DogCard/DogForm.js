import React from 'react';
// import { getDogsById } from '../../services/DogRoute';
// import { updateDog } from '../../services/DogRoute';

export default function DogForm(
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
  handleSubmit
  //   updateDog
) {
  //this dog-form is being grabbed and no info is being put in
  return (
    <div className="dog-form">
      <form>
        <h2>Enter Dog Details</h2>
        <div className="form-control">
          <label>Name: </label>
          <input
            placeholder="Name"
            type="text"
            value={[]}
            onChange={(e) => {
              setName(e.target.value);
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
              setBio(e.target.value);
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
              setAge(e.target.value);
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
              setBreed(e.target.value);
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
              setImage(e.target.value);
            }}
          />
          <br></br>
          <button onClick={handleSubmit}>Update</button>
        </div>
      </form>
    </div>
  );
}
