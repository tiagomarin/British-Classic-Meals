import './style.css';
import loadPage from './modules/loadPage';
import getDetails from './modules/getDetails';
import renderPopUp from './modules/renderPopUp';
import clearPopUp from './modules/clearPopUp';
import postLikes from './modules/postLikes';
import logo from './logo.png'

document.getElementById('logo').src = logo;

loadPage(); // load page

// EVENT LISTENERS ---------------------------------
// details button
window.addEventListener('click', (e) => {
  if (e.target.className === "recipeBtn") {
    const mealID = e.target.parentElement.parentElement.id;
    const displayPopUp = async () => {
      const data = await getDetails(mealID);
      renderPopUp(mealID, data);
    };
    displayPopUp();
  }
});

// close details button
window.addEventListener('click', (e) => {
  if (e.target.id === 'closeModalBtn' || e.target.id === 'modalContainer') {
    clearPopUp();
  }
});


// like button event
window.addEventListener('click', async (e) => {
  if (e.target.className === 'likeBtn') {
    const mealID = e.target.parentElement.parentElement.id;
    const span = e.target.nextSibling.id;
    let likeCount = e.target.nextSibling.innerHTML;
    if (mealID === span) {
      likeCount++;
      e.target.nextSibling.innerHTML = likeCount;
    }
    await postLikes(mealID, likeCount);
  }
});
