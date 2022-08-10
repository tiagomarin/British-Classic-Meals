import {loadMeal} from './fetchMeal';

export const shop = document.querySelector('.shop');

const card = async()=>{
const mealArray = await loadMeal();
mealArray.forEach((element, i) => {
  const loadHtml = document.createElement('div');
  loadHtml.setAttribute('id', `${mealArray[i].idMeal}`);
  const data = `
 
        <img width="200" src="${mealArray[i].strMealThumb}" alt="burger" id="burger" />
        <div class="title">
          <h3>${mealArray[i].strMeal}</h3>
          <button>like</button>
        </div>
        <div>
          <button>Recipe</button>
        </div>
      

 `;
  loadHtml.innerHTML += data;
  shop.appendChild(loadHtml);
});
}
card();