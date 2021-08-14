let counterValue = document.querySelector('#value');
console.log(counterValue);
let value = 0;

function increment() {
  value += 1;
  counterValue.textContent = value;
}

function decrement() {
  value -= 1;
  counterValue.textContent = value;
}

const decrAccess = document.querySelector('[data-action="decrement"]');
console.log(decrAccess);

const incrAccess = document.querySelector('[data-action="increment"]');
console.log(incrAccess);

decrAccess.addEventListener('click', decrement);

incrAccess.addEventListener('click', increment);
