const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fV6CmjK039rOlYeRmPfZ/';

const getComments = (mealID) => fetch(`${involvementUrl}comments?item_id=${mealID}`)
  .then((response) => response.json());

// const getComments = async (mealID) => {
//   try {
//     const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fV6CmjK039rOlYeRmPfZ/comments?item_id=${mealID}`);
//     const data = await response.json();
//     const comments = data.result;
//     console.log("comments API result: ", comments);
//     return comments;
//   } catch (err) {
//     return console.error(err);
//   }
// };

export default getComments;