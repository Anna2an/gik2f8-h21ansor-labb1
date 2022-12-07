const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}


//nästan likadan som ovan
async function getOne(id) {
  //console.log(url+'/'+id)
  const result = await fetch(url+'/'+id)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}