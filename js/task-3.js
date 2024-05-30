const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  console.log(event.target.value);

  //   if (event.target.value.trim() === "") {
  //     nameOutput.textContent = "Anonymous";
  //   } else {
  //     nameOutput.textContent = event.target.value;
  //   }

  nameOutput.textContent = event.target.value.trim() || "Anonymous";
});
