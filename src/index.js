import './style.css';

import loadPage from './modules/loadPage';
import displayPopUp from './modules/displayPopUp';
import clearPopUp from './modules/clearPopUp';
import saveNewComment from './modules/saveNewComment';
import postLikes from './modules/postLikes';
import logo from './assets/logo.png';

document.getElementById('logo').src = logo;

loadPage(); // load page

// EVENT LISTENERS ---------------------------------
// details button
window.addEventListener('click', (e) => {
  if (e.target.className === 'recipeBtn') {
    const mealID = e.target.parentElement.parentElement.id;
    displayPopUp(mealID);
  }
});

// close details buttons

window.addEventListener('click', (e) => {
  if (e.target.parentElement.id === 'closeModalBtn' || e.target.id === 'modalContainer') {
    clearPopUp();
    // document.getElementsByTagName('footer').className.remove('hide')
  }
});

// show/hide instructions
window.addEventListener('click', (e) => {
  if (e.target.id === 'instructionsBtn') {
    document.getElementById('instructions').classList.toggle('show');
    if (e.target.innerHTML === '<i class="fa-solid fa-angle-down"></i>') {
      e.target.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    } else {
      e.target.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }
  }
  if (e.target.parentElement.id === 'instructionsBtn') {
    document.getElementById('instructions').classList.toggle('show');
    if (e.target.parentElement.innerHTML === '<i class="fa-solid fa-angle-down"></i>') {
      e.target.parentElement.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    } else {
      e.target.parentElement.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }
  }
});

// like button event
window.addEventListener('click', async (e) => {
  if (e.target.id === 'likeIcon') {
    const mealID = e.target.parentElement.parentElement.parentElement.parentElement.id;
    const span = e.target.nextSibling.nextSibling.id;
    let likeCount = +(e.target.nextSibling.nextSibling.innerHTML);
    if (mealID === span) {
      likeCount += 1;
      e.target.nextSibling.nextSibling.innerHTML = likeCount;
    }
    await postLikes(mealID, likeCount);
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
