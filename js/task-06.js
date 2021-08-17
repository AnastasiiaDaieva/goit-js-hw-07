const inputAccess = document.querySelector('#validation-input');

function checkSymbols() {
  //   console.log(inputAccess.value.length);
  if (
    inputAccess.value.length === 6 &&
    inputAccess.classList.contains('invalid')
  ) {
    inputAccess.classList.remove('invalid');

    inputAccess.classList.add('valid');
  } else if (
    inputAccess.value.length !== 6 &&
    inputAccess.classList.contains('valid')
  ) {
    inputAccess.classList.remove('valid');
    inputAccess.classList.add('invalid');
  } else if (inputAccess.value.length < 6) {
    inputAccess.classList.add('invalid');
  } else {
    inputAccess.classList.add('valid');
  }
}

inputAccess.addEventListener('blur', checkSymbols);
