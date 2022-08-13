const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fV6CmjK039rOlYeRmPfZ/';

const getComments = (mealID) => fetch(`${involvementUrl}comments?item_id=${mealID}`)
  .then((response) => response.json());

export default getComments;
