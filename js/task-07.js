const getInput = document.querySelector('#font-size-control');
const getSpan = document.querySelector('#text');

console.log(getInput);
console.log(getSpan.textContent);

getInput.addEventListener('input', changeSize);

function changeSize(event) {
  let currentFontSize = event.target.value;
  getSpan.style.fontSize = `${currentFontSize}px`;
}
