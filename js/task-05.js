let outputAccess = document.querySelector('#name-output');
let inputAccess = document.querySelector('#name-input');

inputAccess.addEventListener('input', e => {
  e.target.value === ''
    ? (outputAccess = 'незнакомец')
    : (outputAccess.textContent = e.target.value);
});
