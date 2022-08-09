import getComments from "./getComments";

const renderPopUp = (ID) => {
  const popUp = document.createElement('div');
  popUp.classList = 'popUp'
  popUp.innerHTML = 

  document.getElementsByTagName('main').appendChild(popUp)
  
  getComments(ID);
}

export default renderPopUp