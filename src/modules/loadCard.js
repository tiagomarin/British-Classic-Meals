import loadMeals from './loadMeals';
import fetchLikes from './fetchlikes';
const shop = document.querySelector('.shop');
const card = async () => {
  const likesArray = await fetchLikes();
  const mealArray = await loadMeals();
  mealArray.forEach((element, i) => {
    let likes = 0;
    if(likesArray[i].item_id===mealArray[i].idMeal){
      likes =likesArray[i].likes;
    }
    const loadHtml = document.createElement('div');
    loadHtml.setAttribute('id', `${mealArray[i].idMeal}`);
    const data = `
        <img width="200" src="${mealArray[i].strMealThumb}" alt="${mealArray[i].strMeal}"  />
        <div class="title">
          <h3>${mealArray[i].strMeal}</h3>
          <button class="likeBtn" >like</button><span id="${mealArray[i].idMeal}" class="likeCount">${likes}</span>
        </div>
        <div>
          <button class="recipeBtn" >Recipe</button>
        </div>
 `;
    loadHtml.innerHTML += data;
    shop.appendChild(loadHtml);
  });

};

export default card;
