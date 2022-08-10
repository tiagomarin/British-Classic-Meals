const clearPopUp = () => {
  const modalContainer = document.getElementById('modalContainer');
  while (modalContainer.firstChild) {
    modalContainer.removeChild(modalContainer.firstChild);
  }
  modalContainer.remove();
};

export default clearPopUp;