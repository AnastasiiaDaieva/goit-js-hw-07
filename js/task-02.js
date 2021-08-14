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
    listOfIngr.append(ingredItem);

    return ingredItem;
  });

  console.log(items);
  return listOfIngr;
}

addToList();
