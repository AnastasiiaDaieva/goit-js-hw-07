const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function addToList() {
  const listOfIngr = document.getElementById('ingredients');

  console.log(listOfIngr);

  const items = ingredients.map(elem => {
    const ingredItem = document.createElement('li');
    console.log(ingredItem);
    ingredItem.textContent = elem;
    return ingredItem;
  });
  listOfIngr.append(...items);

  // console.log(items);
  return listOfIngr;
}

addToList();
