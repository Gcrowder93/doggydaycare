import { client } from './client';

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
  let request = await client.from('dogs').select().match({ id });
  return request;
}

export async function updateDog(dog) {
  const resp = await client.from('dogs').update(dog).eq('id', dog.id);
  return resp;
}
