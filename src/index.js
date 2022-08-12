import './style.css';
import card from './modules/loadCard';
import getDetails from './modules/getDetails';
import renderPopUp from './modules/renderPopUp';
import clearPopUp from './modules/clearPopUp';
import { assign, countBy } from 'lodash';


card(); // load page

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

const postLikes = async (mealID,likeCount) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fV6CmjK039rOlYeRmPfZ/likes/', {
    method: 'POST',
    body: JSON.stringify({"item_id": mealID,"likes": likeCount}),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};
// like button event

window.addEventListener('click',async  (e) => {
  if (e.target.className === 'likeBtn') {

    const mealID = e.target.parentElement.parentElement.id;

   
    const span = e.target.nextSibling.id;
    let likeCount =e.target.nextSibling.innerHTML;
    if(mealID=== span){
      likeCount++;
      e.target.nextSibling.innerHTML=likeCount;
    
    }
await postLikes(mealID,likeCount);

  }
});
