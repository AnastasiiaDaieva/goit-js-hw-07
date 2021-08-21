const inputAccess = document.querySelector('#validation-input');

const dataLength = parseInt(
  document.querySelector('#validation-input').dataset.length,
);

function checkSymbols() {
  let value = inputAccess.value.length;
  if (value !== dataLength) {
    inputAccess.classList.add('invalid');
    inputAccess.classList.remove('valid');
    return;
  }
  inputAccess.classList.add('valid');
  inputAccess.classList.remove('invalid');
}

inputAccess.addEventListener('blur', checkSymbols);
