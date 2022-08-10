import getComments from "./getComments";
import insertAfter from "./insertAfter";

const renderPopUp = (ID, data) => {
  // variables from API -------------------------
  const title = data[0]
  const imageSrc = data[1]
  const quantities = data[2] //array
  const ingredients = data[3] //array
  const instructions = data[4]
  // const comments = getComments(ID); //array

  console.log(title)
  console.log(imageSrc)
  console.log(quantities)
  console.log(ingredients)
    
  // start creating html -------------------------
  const main = document.getElementsByTagName('main')
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modalContainer';
  main.appendChild(modalContainer);
  // modal HTML:
  const html = `
  <div class="modal">
  <h2>${title}</h2>
  <span id="closeModalBtn">X</span>
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
`
  modalContainer.appendChild(html);

  //ingredients:
  const ingredientsUl = document.getElementById('ingredientsPlaceholder');
  let i = 0
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${quantities[i]}</span>${ingredient[i]}`
    insertAfter(ingredientsUl, li);
    i += 1;
  });
}

export default renderPopUp