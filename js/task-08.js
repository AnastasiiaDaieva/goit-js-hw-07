const getBoxes = document.querySelector('#boxes');
const getCreateButton = document.querySelector('[data-action="render"]');
const getClearButton = document.querySelector('[data-action="destroy"]');
const getInput = document.querySelector('[type="number"]');

getCreateButton.addEventListener('click', getAmount);
getClearButton.addEventListener('click', clearBoxes);

// get amount from input
function getAmount() {
  let amount = getInput.value;
  createBoxes(amount);
}

// random rgb background
function colorForBoxes() {
  let randomRed = Math.random() * (255 - 1) + 1;
  randomRed = Math.round(randomRed);
  let randomGreen = Math.random() * (255 - 1) + 1;
  randomGreen = Math.round(randomGreen);
  let randomBlue = Math.random() * (255 - 1) + 1;
  randomBlue = Math.round(randomBlue);
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

// create function for generation of new boxes
// add amount to the function of div creation
// first is 30x30, each next one is 10px bigger

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = colorForBoxes();
    getBoxes.appendChild(newDiv);
  }
}

// write function to clear the boxes

function clearBoxes() {
  getBoxes.innerHTML = '';
}
