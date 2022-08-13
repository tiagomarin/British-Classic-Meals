import './style.css';
import card from './modules/loadCard';
import displayPopUp from './modules/displayPopUp';
import clearPopUp from './modules/clearPopUp';
import saveNewComment from './modules/saveNewComment';

card(); // load page

// EVENT LISTENERS ---------------------------------
// details button
window.addEventListener('click', (e) => {
  if (e.target.className === 'recipeBtn') {
    const mealID = e.target.parentElement.parentElement.id;
    displayPopUp(mealID);
  }
});

// close details button
window.addEventListener('click', (e) => {
  if (e.target.id === 'closeModalBtn' || e.target.id === 'modalContainer') {
    clearPopUp();
  }
});

window.addEventListener('click', (e) => {
  if (e.target.className === 'commentBtn') {
    const mealID = e.target.id;
    const userName = document.getElementById('userName').value;
    const comment = document.getElementById('commentArea').value;
    saveNewComment(mealID, userName, comment);
  }
});
