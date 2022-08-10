import './style.css';
import getDetails from './modules/getDetails';
import renderPopUp from './modules/renderPopUp';
import clearPopUp from './modules/clearPopUp';

// DOM elements:
const detailsBtn = document.querySelectorAll(".recipeBtn");
console.log(detailsBtn)

// EVENT LISTENERS ---------------------------------
// details button
detailsBtn.forEach(button => {
  button.addEventListener('click', (e) => {
    const mealID = e.target.parentElement.parentElement.id;
    const displayPopUp = async () => {
      const data = await getDetails(mealID);
      renderPopUp(mealID, data);
    }
    displayPopUp();
  });
});
// close details button
window.addEventListener('click', (e) => {
  if (e.target.id === "closeModalBtn" || e.target.id === "modalContainer") {
    clearPopUp();
  }
})