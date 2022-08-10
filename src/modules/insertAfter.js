const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling); 
}

export default insertAfter