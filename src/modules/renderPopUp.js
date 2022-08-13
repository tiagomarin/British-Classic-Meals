const renderPopUp = (ID, data) => {
  // variables from API -------------------------
  const title = data[0];
  const imageSrc = data[1];
  const ingredients = data[2]; // array
  const quantities = data[3]; // array
  const instructions = data[4];
  const comments = data[5];
  let commentCounter = 0;
  if (data[5].length) {
    commentCounter = data[5].length; // array
  }

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
  <div id="commentsSection">
    <h3>Comments &nbsp;  (<span id="commentsCounter">${commentCounter}</span>)</h3>
    <div id="commentsPlaceholder"></div>
  </div>
  <form class="form">
    <input id="userName" type="text" placeholder="Your Name">
    <textarea id="commentArea" placeholder="Write here..."></textarea>
    <button id="${ID}" class="commentBtn" type="button">Comment</button>
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

  // comments
  if (comments.length) {
    const commentsPlaceholder = document.getElementById('commentsPlaceholder');
    comments.forEach((comment) => {
      const commentCard = `<div class="commentCard">
                          <h3 id="commenter">${comment.username}</h3>
                          <span id="commentDate">${comment.creation_date}</span>
                          <p id="comment">${comment.comment}</p>
                        </div>`;
      commentsPlaceholder.innerHTML += commentCard;
    });
  }
};

export default renderPopUp;
