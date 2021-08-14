function countCategories() {
  const getCategories = document.querySelectorAll('.item').length;
  console.log(`В списке ${getCategories} категории.`);
}

countCategories();

function showCategories() {
  const getItem = document.querySelectorAll('.item');
  //   console.log(getItem);
  getItem.forEach(elem => {
    const headingText = elem.firstElementChild.textContent;
    const numberOfEls = elem.getElementsByTagName('li').length;

    console.log(
      `Категория:  ${headingText}. Количество элементов: ${numberOfEls}`,
    );
  });
}
showCategories();
