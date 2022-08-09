import './style.css';
import getDetails from './modules/getDetails';
import renderPopUp from './modules/renderPopUp';

// DOM elements:
const detailsBtn = document.querySelectorAll(".see-recipe");
const commentBtn = document.querySelectorAll(".comment");

// EVENT LISTENERS ---------------------------------

// details button
detailsBtn.forEach(button => {
  button.addEventListener('click', (e) => {
    const mealID = e.target.parentElement.id;
    getDetails(mealID);
    renderPopUp(mealID);
  });
});