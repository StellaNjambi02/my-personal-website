// DOM method
const messageElement = document.getElementById('b1');
const changeButton = document.getElementById('b1');

changeButton.addEventListener('click', () => {
  messageElement.textContent = "Resume";
});
