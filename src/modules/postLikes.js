const postLikes = async (mealID, likeCount) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fV6CmjK039rOlYeRmPfZ/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: mealID, likes: likeCount }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export default postLikes;