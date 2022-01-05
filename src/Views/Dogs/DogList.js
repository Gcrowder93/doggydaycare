import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../../Components/DogCard/Dogs';
import DogCard from '../../Components/DogCard/DogCard';
import { fetchDogs } from '../../services/DogRoute';

export default function DogList() {
  const [dogs, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogs();
      setDog(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="dog-list">
      {!loading &&
        dogs.map((Dogs) => (
          <Link key={dogs.id} to={`/Dogs/${dogs.id}`}>
            <Dogs {...Dogs} />
          </Link>
        ))}
    </div>
  );
}
