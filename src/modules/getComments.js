const getComments = async (ID) => {
  try {
    const response = await fetch(`https://apps/fV6CmjK039rOlYeRmPfZ/comments?item_id=${ID}`);
    const data = await response.json();
    const comments = data.result;
  } catch (err) {
    console.error(err);
  }
};

export default getComments;