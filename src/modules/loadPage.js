import loadMeals from './loadMeals';
import fetchLikes from './fetchlikes';

// DOM elements
const shop = document.querySelector('.shop');
const cardCount = document.getElementById('mealCounter');

const loadPage = async () => {
  // get likes from involvement API
  const likesArray = await fetchLikes();
  likesArray.sort((a, b) => b.item_id - a.item_id);
  // get meal list from API
  const mealArray = await loadMeals();
  mealArray.sort((a, b) => b.idMeal - a.idMeal);
  // print counter next to the "meals" link
  cardCount.innerHTML = `(${mealArray.length})`;
  let likes = 0;
  // add elements on DOM
  mealArray.forEach((element, i) => {
    if (likesArray[i].item_id === element.idMeal) {
      likes = likesArray[i].likes;
    }
    const loadHtml = document.createElement('div');
    loadHtml.id = element.idMeal;
    loadHtml.classList = 'mealCard';
    const data = `
      <img src="${element.strMealThumb}" alt="${element.strMeal}" />
      <div class="cardInfo">
        <div class="title">
          <h3>${element.strMeal}</h3>
          <button class="likeBtn">
            <i id="likeIcon" class="fa-regular fa-heart"></i> &nbsp;
            <span id="${element.idMeal}" class="likeCount">${likes}</span>
          </button>
        </div>
        <button class="recipeBtn">Recipe</button>
      </div>
      <div class="breakLine"></div>
 `;
    loadHtml.innerHTML += data;
    shop.appendChild(loadHtml);
  });
};

export default loadPage;
