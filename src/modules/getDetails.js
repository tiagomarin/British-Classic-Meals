import getComments from './getComments';

const getDetails = async (mealID) => {
  const comments = await getComments(mealID);
  if(comments){
    
  }
  try {
    const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    const data = await response.json();
    // filter infromation we need
    const imageSrc = data.meals[0].strMealThumb;
    const title = data.meals[0].strMeal;
    const quantities = [];
    const ingredients = [];
    const instructions = data.meals[0].strInstructions;
    // populate ingredients array
    let i = 1;
    while (i <= 20) {
      if (data.meals[0][`strIngredient${i}`]) {
        ingredients.push(data.meals[0][`strIngredient${i}`]);
      }
      i += 1;
    }
    // populate quantities array
    i = 1;
    while (i <= 20) {
      if (data.meals[0][`strMeasure${i}`]) {
        quantities.push(data.meals[0][`strMeasure${i}`]);
      }
      i += 1;
    }
    return [title, imageSrc, ingredients, quantities, instructions, comments];
  } catch (err) {
    return console.error(err);
  }
};

export default getDetails;
