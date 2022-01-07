import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dogs from '../../Components/DogCard/Dogs';
import { getDogsById /*deleteDog*/ } from '../../services/DogRoute';

export default function DogDetail() {
  const { id } = useParams();
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await getDogsById(id);
      setDogs(dogData.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h2> loading </h2>;
  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   await deleteDog(id);
  // };

  return (
    <>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <Dogs {...dogs} /*handleDelete={handleDelete}*/ />
        </li>{' '}
      </ul>
    </>
  );
}
