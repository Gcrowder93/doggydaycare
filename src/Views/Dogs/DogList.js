import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../services/DogRoute';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await fetchDogs();
      setDogs(dogData);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h2> loading </h2>;

  return (
    <>
      <h1>Doggos</h1>
      <ul>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <Link key={dog.id} to={`/dogs/${dog.id}`}>
              <img src={dog.image}></img>
            </Link>
            <h2>
              {dog.name} is {dog.age} years old, and is a {dog.breed}
            </h2>
          </div>
        ))}
      </ul>
    </>
  );
}
