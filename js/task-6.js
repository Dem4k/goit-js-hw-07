function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createbtn = document.querySelector("button[data-create]");
const destroybtn = document.querySelector("button[data-destroy]");
const containerBox = document.querySelector("#boxes");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  containerBox.append(fragment);
}

createbtn.addEventListener("click", onCreateClick);

function onCreateClick(event) {
  const amount = Number(input.value);
  console.log(amount);
  if (amount < 1 || amount > 100) {
    return;
  }
  containerBox.innerHTML = "";
  createBoxes(amount);
}

destroybtn.addEventListener("click", onDestroy);

function onDestroy(event) {
  containerBox.innerHTML = "";
  input.value = "";
}
