let counterValue = document.querySelector('#value');

console.log(counterValue);

function increment() {
  return (counterValue += 1);
}

function decrement() {
  return (counterValue -= 1);
}

const btnAccess = document.querySelector('[type="button"]');
console.log(btnAccess);

btnAccess.addEventListener('click', event => {
  console.log(event);
});
