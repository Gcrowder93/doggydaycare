import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dogs from '../../Components/DogCard/Dogs';
import { Link } from 'react-router-dom';
import { getDogsById } from '../../services/DogRoute';

export default function DogDetail() {
  const { id } = useParams();
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const dogData = await fetchDogs();
  //     setDogs(dogData);
  //   };
  //   fetchData();
  // }, [id]);

  useEffect(() => {
    getDogsById(id)
      .then(({ data }) => setDogs(data))
      .finally(() => setLoading(false));
  });
  if (loading) return <h2> loading </h2>;

  return (
    <>
      <ul>
        <li key={dogs.id} style={{ listStyleType: 'none' }}>
          <Dogs dog={dogs} />
          {dogs.map((dog) => (
            <div key={dog.id}>
              <h1> Say Hi to {dog.name}. </h1>
              <img src={dog.image}></img>
              <h2> {dog.bio}. </h2>
              <Link to="/dogs/:id/DogEdit">Edit</Link>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
}
