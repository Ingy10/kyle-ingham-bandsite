const form = document.querySelector(".main3__form");
const section = document.querySelector(".main3__comment-section");

const commentList = [
  {
    name: "Victor Pinto",
    timestamp: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    timestamp: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    timestamp: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// display comment by creating elements, assigning classes and content then appending them in proper parent-child relationships
function displayComment(commentObj) {
  const divCommentBox = document.createElement("div");
  const iconComment = document.createElement("div");
  const commentContent = document.createElement("div");
  const commentTitle = document.createElement("div");
  const commentName = document.createElement("p");
  const commentDate = document.createElement("p");
  const commentText = document.createElement("p");

  divCommentBox.classList.add("main3__div-comment-box", "main3__div-1");
  iconComment.classList.add("main3__icon-comment", "icon-profile");
  commentContent.classList.add("main3__comment-content");
  commentTitle.classList.add("main3__comment-title");
  commentText.classList.add("main3__comment-text");
  commentName.classList.add("main3__comment-name");
  commentDate.classList.add("main3__comment-date");

  commentName.textContent = commentObj.name;
  commentDate.textContent = commentObj.timestamp;
  commentText.textContent = commentObj.comment;

  commentTitle.appendChild(commentName);
  commentTitle.appendChild(commentDate);
  commentContent.appendChild(commentTitle);
  commentContent.appendChild(commentText);
  divCommentBox.appendChild(iconComment);
  divCommentBox.appendChild(commentContent);
  section.appendChild(divCommentBox);
}

// clears existing text in comments and iterates through comment array, adding commentObject content into comment section
function displayComments() {
  section.innerHTML = "";

  for (const commentObject of commentList) {
    displayComment(commentObject);
  }
}

// Function that activates when submit button is pushed.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector(".main3__input-1");
  const commentInput = document.querySelector(".main3__input-2");
  let valid = true;

  // Check to see if name input is filled and adding/removing red border for invalid form submission by adding or removing invalid class
  if (event.target.name.value === "") {
    nameInput.classList.add("main3__input-invalid");
    valid = false;
  } else {
    nameInput.classList.remove("main3__input-invalid");
  }

  // Check to see if comment input is filled and adding/removing red border for invalid form submission by adding or removing invalid class
  if (event.target.comment.value === "") {
    commentInput.classList.add("main3__input-invalid");
    valid = false;
  } else {
    commentInput.classList.remove("main3__input-invalid");
  }

  // collecting user comment data in the form of an object if form is filled correctly
  if (valid) {
    const formData = {
      name: form.name.value,
      timestamp: new Date().toLocaleDateString(),
      comment: form.comment.value,
    };
    commentList.unshift(formData); // pushes new comment to top of comment list (position 0 of array)
    displayComments(); // Displays comment with other comments after submission
    form.reset(); // Clears input fields for name and comment
  }
});

displayComments(); // Displays inital three comments
