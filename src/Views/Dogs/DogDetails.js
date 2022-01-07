import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dogs from '../../Components/DogCard/Dogs';
import { getDogsById } from '../../services/DogRoute';
// import { deleteDog } from '../../services/DogRoute';
// import { Link } from 'react-router-dom';

export default function DogDetail() {
  const { id } = useParams();
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // const handleDelete with async and no default

  useEffect(() => {
    const fetchData = async () => {
      const dogData = await getDogsById(id);
      setDogs(dogData.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h2> loading </h2>;

  return (
    <>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <Dogs {...dogs} />
          {/* <button onClick={handleDelete}>Delete</button> */}
        </li>{' '}
      </ul>
    </>
  );
}
