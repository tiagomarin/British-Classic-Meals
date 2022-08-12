const updateComments = (userName, comment) => {
  // update counter

  let commentsCounter = +document.getElementById("commentsCounter").innerHTML
  commentsCounter += 1
  document.getElementById("commentsCounter").innerHTML = commentsCounter

  // (document.getElementById('commentsCounter').innerHTML)++;


  // update the comments section adding the new comment
  const commentsPlaceholder = document.getElementById('commentsPlaceholder');
  const today = new Date();
  const date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  const commentCard = `<div class="commentCard">
                          <h3 id="commenter">${userName}</h3>
                          <span id="commentDate">${date}</span>
                          <p id="comment">${comment}</p>
                        </div>`
  commentsPlaceholder.innerHTML += commentCard;
}

export default updateComments