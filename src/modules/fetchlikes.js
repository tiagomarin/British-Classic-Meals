const fetchLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fV6CmjK039rOlYeRmPfZ/likes/');
  const likes = await response.json();
  return likes;
};
export default fetchLikes;