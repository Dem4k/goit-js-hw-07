const form = document.querySelector("form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();

  const password = event.currentTarget.elements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log({ email, password });

  event.currentTarget.reset();
}
