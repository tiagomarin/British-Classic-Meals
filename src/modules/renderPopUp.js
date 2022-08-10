import getComments from './getComments';

const renderPopUp = (ID, data) => {
  // variables from API -------------------------
  const title = data[0];
  const imageSrc = data[1];
  const ingredients = data[2]; // array
  const quantities = data[3]; // array
  const instructions = data[4];
  // const comments = getComments(ID); //array -- next part of project

  // start creating html -------------------------
  const main = document.getElementById('main');
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modalContainer';

  // modal HTML:
  const modal = `
  <div class="modal">
  <h2>${title}</h2>
  <span id="closeModalBtn">back to <br> list</span>
  <div class="modalTop">
    <img src="${imageSrc}" alt="${title}">
    <ul id="ingredientsPlaceholder">
      <h3>ingredients</h3>  
    </ul>
  </div>
  <div class="instructions">
    <h3>Instructions</h3>
    <p>${instructions}</p>
  </div>
  <form class="form">
    <input type="text" placeholder="Your Name">
    <textarea id="comment" placeholder="Write here..."></textarea>
    <button id="${ID}" type="button">Comment</button>
  </form>
</div>
`;
  modalContainer.innerHTML = modal;
  main.appendChild(modalContainer);

  // ingredients and quantities
  const ingredientsUl = document.getElementById('ingredientsPlaceholder');
  ingredients.forEach((ingredient, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${quantities[i]}</span>${ingredient}`;
    ingredientsUl.appendChild(li);
  });
};

export default renderPopUp;