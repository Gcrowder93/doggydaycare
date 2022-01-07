import { client, checkError } from './client';

export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function getDogsById(id) {
  let request = await client.from('dogs').select('*').match({ id }).single();
  return request;
}

export async function updateDog(id, name, bio, image, age, breed) {
  const response = await client.from('dogs').update({ name, bio, image, age, breed }).eq('id', id);
  return checkError(response);
}

export async function addDog(name, bio, image, age, breed) {
  const response = await client.from('dogs').insert({ name, bio, image, age, breed });
  return checkError(response);
} //addDog and DogAdmin created

// export async function deleteDog(id) {
//   const resp = await client.from('dogs').delete({ id }).match('id', id);
//   return checkError(resp);
// }

//add function for handleDelete in dogdetail.js and dog.js
{
  /* <button onClick={handleDelete}>Delete</button> */
}
