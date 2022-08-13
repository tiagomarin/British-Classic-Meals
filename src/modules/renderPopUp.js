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
  <span id="closeModalBtn"><i class="fa-solid fa-xmark"></i></span>
  <div class="modalTop">
    <img src="${imageSrc}" alt="${title}">
    <div id="ingredientsWrap">
    <h3>ingredients</h3> 
      <ul id="ingredientsPlaceholder"></ul>
    </div>  
  </div>
  <div class="instructionsWrap">
    <div id="instructionsTop">
      <h3>Instructions</h3>
      <button id="instructionsBtn"><i class="fa-solid fa-angle-down"></i></button>
    </div>
    <div id="instructions">
      <p>${instructions}</p>
    </div>
  </div>
  <form class="form">
    <h3>Be the first to leave a comment!</h3>
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