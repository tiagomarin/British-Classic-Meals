import './style.css';

// import photo from "./images/burger.jpg"
//  const burger = document.getElementById('burger');
//  burger.src = photo;
const shop = document.querySelector('.shop');

const loadMeal = async () => {
  const response = await fetch(
    'https://themealdb.com/api/json/v1/1/filter.php?a=British',
  );
  const mealList = await response.json();
  const mealArray = mealList.meals;

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
};
loadMeal();
