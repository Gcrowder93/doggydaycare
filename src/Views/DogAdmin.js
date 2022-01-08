import React, { useState } from 'react';
import { addDog } from '../services/DogRoute';
import DogForm from '../Components/DogCard/DogForm';

export default function CreateDog() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDog(name, bio, image, age, breed);
      alert('DOG HAS BEEN ADDED');
    } catch {
      alert('DOG WAS NOT ADDED');
    }
    setAge(''), setName(''), setBio(''), setBreed(''), setImage('');
  };

  return (
    <div>
      <h1>Add New Dog</h1>
      <DogForm
        name={name}
        setName={setName}
        bio={bio}
        setBio={setBio}
        image={image}
        setImage={setImage}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
