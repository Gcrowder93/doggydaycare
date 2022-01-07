import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dogs from '../../Components/DogCard/Dogs';
// import { useHistory } from 'react-router-dom';
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

  //ENDING THURSDAY - ON EDIT PAGE, CLICKING UPDATE DOES UPDATE THE DOG INFO, BUT DOESNT CLEAR OR ALERT YOU THAT YOU UPDATE IT.
  //ON ADMIN PAGE, WHEN TRYING TO ADD A DOG, TYPING BREAKS IT ALL TO ANOTHER TYPE ERROR
  //NEED TO ADD DELETE BUTTON, WHICH EVERYTHING IS TYPED, AND AN ALERT WHEN YOU ADD OR EDIT
  //WRITE SOME TEST

  // const history = useHistory();

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   await deleteDog(id);
  //   history.push('/');
  // };

  if (loading) return <h2> loading </h2>;

  return (
    <>
      <ul>
        <Dogs {...dogs} /*handleDelete={handleDelete}*/ />
      </ul>
    </>
  );
}
