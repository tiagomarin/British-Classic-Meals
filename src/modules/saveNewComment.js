import updateComments from './updateComments';

const saveNewComment = async (mealID, userName, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fV6CmjK039rOlYeRmPfZ/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealID,
      username: userName,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const apiResponse = await response.text();
  updateComments(userName, comment);
  return apiResponse;
};

export default saveNewComment;