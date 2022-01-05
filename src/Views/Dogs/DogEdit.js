// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import DogForm from '../../Components/DogCard/DogForm';
// import { fetchDogs } from '../../services/DogRoute';

// export default function DogEdit() {
//   const [dogs, setDogs] = useState({});
//   const params = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const dogData = await fetchDogs(params.id);
//       setDogs(dogData);
//     };
//     fetchData();
//   }, [params.id]);

//   return (
//     <div>
//       <h1>Edit Dog</h1>
//       <DogForm {...dogs} />
//     </div>
//   );
// }
