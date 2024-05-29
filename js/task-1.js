const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");
console.log(items.length);
items.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  const subItems = item.querySelectorAll("ul li");
  console.log(header);
  console.log(subItems.length);
});
