import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogForm from '../../Components/DogCard/DogForm';
import { updateDog } from '../../services/DogRoute';
import { getDogsById } from '../../services/DogRoute';

export default function DogEdit() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDogsById(params.id);
      setName(resp.name);
      setBio(resp.bio);
      setImage(resp.image);
      setAge(resp.age);
      setBreed(resp.breed);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    try {
      alert('EDIT COMPLETE');
    } catch {
      alert('EDIT COMPLETE');
    }
    e.preventDefault();
    setAge(''), setName(''), setBio(''), setBreed(''), setImage('');
    await updateDog(params.id, name, bio, image, age, breed);
    history.push('/');
  };

  if (loading) return <h2> loading </h2>;

  return (
    <div>
      <h1>Edit Dog</h1>
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
      <br></br>
      <button onClick={handleSubmit}>Delete</button>
    </div>
  );
}
