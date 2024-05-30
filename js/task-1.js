const categoriesItems = document.querySelectorAll("li.item");
console.log(`Nubers of categories: ${categoriesItems.length}`);

categoriesItems.forEach((li) =>
  console.log(
    `Category: ${li.firstElementChild.textContent}\nElements: ${li.lastElementChild.children.length}`
  )
);
