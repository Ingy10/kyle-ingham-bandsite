// Adding red border for invalid form submission
const form = document.querySelector(".main3__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector(".main3__input-1");
  const commentInput = document.querySelector(".main3__input-2");
  let valid = true;

  if (event.target.name.value === "") {
    alert("Please fill name field");
    nameInput.classList.add("main3__input-invalid");
    valid = false;
  } else {
    nameInput.classList.remove("main3__input-invalid");
  }
  if (event.target.comment.value === "") {
    alert("Please fill out comment field");
    commentInput.classList.add("main3__input-invalid");
    valid = false;
  } else {
    commentInput.classList.remove("main3__input-invalid");
  }

  if (valid) {
    // collecting user data from comments if form is filled correctly
    const formData = {
      fullName: event.target.name.value,
      comment: event.target.comment.value,
    };
    console.log(formData);
  }
});
