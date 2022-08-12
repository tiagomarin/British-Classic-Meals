/**
 * @jest-environment jsdom
*/

import updateComments from '../src/modules/updateComments';

describe('update comment section after add a new one', () => {
  // set up environment
  document.body.innerHTML = `
  <div id="commentsSection">
  <h3>Comments &nbsp; (<span id="commentsCounter">5</span>)</h3>
  <div id="commentsPlaceholder">
    <div class="commentCard">
      <h3 id="commenter">Tiago</h3>
      <span id="commentDate">2022-08-12</span>
      <p id="comment">Uhmmmmmmmmm!</p>
    </div>
    <div class="commentCard">
      <h3 id="commenter">Jessy</h3>
      <span id="commentDate">2022-08-12</span>
      <p id="comment">Hey let's go!</p>
    </div>
    <div class="commentCard">
      <h3 id="commenter">Joana</h3>
      <span id="commentDate">2022-08-12</span>
      <p id="comment">I'm in!</p>
    </div>
    <div class="commentCard">
      <h3 id="commenter">Tom</h3>
      <span id="commentDate">2022-08-12</span>
      <p id="comment">Beautiful</p>
    </div>
    <div class="commentCard">
      <h3 id="commenter">Ana</h3>
      <span id="commentDate">2022-08-12</span>
      <p id="comment">I want that!</p>
    </div>
  </div>
</div>`;
  test('counter was incremented by 1', () => {
    let commentsCounterBefore = +document.getElementById('commentsCounter');
    const userName = 'Kleiton';
    const comment = 'I really love this recipe';
    updateComments(userName, comment);
    const commentsCounterAfter = +document.getElementById('commentsCounter');
    expect(commentsCounterAfter).toEqual(commentsCounterBefore += 1);
  });
  test('the new comment was displayed correctly to user', () => {
    const numOfCommentsBefore = document.getElementById('commentsPlaceholder').childElementCount;
    const userNameMock = 'Kleiton';
    const commentMock = 'I really love this recipe';
    updateComments(userNameMock, commentMock);
    const numOfCommentsAfter = document.getElementById('commentsPlaceholder').childElementCount;
    const userNameAfter = document.getElementById('commentsPlaceholder').lastElementChild.firstElementChild.innerHTML;
    const commentAfter = document.getElementById('commentsPlaceholder').lastElementChild.lastElementChild.innerHTML;
    expect(numOfCommentsAfter).toEqual(numOfCommentsBefore);
    expect(userNameAfter).toEqual(userNameMock);
    expect(commentAfter).toEqual(commentMock);
  });
});