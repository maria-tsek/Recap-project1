// Select the form element
const form = document.querySelector("form");
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const tagsInput = document.querySelector('[data-js="tagInput"]');
const showAnswerInput = document.getElementsByClassName("show-answer");

const characterCountQuestion = document.getElementById(
  "character-count-question"
);
const characterCountAnswer = document.getElementById("character-count-answer");

// Inside the form submit event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = questionInput.value;
  const answer = answerInput.value;
  const tags = tagsInput.value;

  const card = document.createElement("div");
  card.classList.add("question-card");

  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.id = "bookmark-icon";
  bookmarkIcon.classList.add("bookmark");
  bookmarkIcon.src =
    "https://icons.veryicon.com/png/o/object/material-design-icons/bookmark-29.png";
  bookmarkIcon.alt = "black bookmark";

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.textContent = `Question: ${question}`;

  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer");
  answerDiv.textContent = `Answer: ${answer}`;

  const answerButton = document.createElement("button");
  answerButton.textContent = "Show Answer";

  const tagDiv = document.createElement("div");
  tagDiv.classList.add("categories");

  if (tags && typeof tags === "string") {
    // Split the tags by spaces into an array
    const tagArray = tags.split(" ");

    // Iterate through the tagArray and create buttons for each tag
    tagArray.forEach((tag) => {
      if (tag.trim() !== "") {
        if (!tag.startsWith("#")) {
          tag = `#${tag}`;
        }

        // Create a button for the tag
        const tagButton = document.createElement("button");
        tagButton.textContent = tag;
        tagDiv.appendChild(tagButton);
      }
    });
  }

  function hideAnswer() {
    answerDiv.setAttribute("hidden", "");
  }

  function showAnswer() {
    answerDiv.removeAttribute("hidden");
  }

  hideAnswer();

  answerButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (answerButton.textContent === "Show Answer") {
      showAnswer();
      answerButton.textContent = "Hide Answer";
    } else {
      hideAnswer();
      answerButton.textContent = "Show Answer";
    }
  });

  // Append the elements to the card
  card.appendChild(bookmarkIcon);
  card.appendChild(questionDiv);
  card.appendChild(answerDiv);
  card.appendChild(answerButton);
  card.appendChild(tagDiv);

  // Append the card to the page
  const cardContainer = document.getElementById("card-container"); // Replace with the actual container ID
  cardContainer.appendChild(card);

  // Clear the form fields
  questionInput.value = "";
  answerInput.value = "";
  tagsInput.value = "";
});

// Form field text counter

form.addEventListener("keyup", (event) => {
  if (event.target.matches("[maxlength]")) {
    //get input value and length
    const valueLength = event.target.value.length;
    const maxCharacters = event.target.getAttribute("maxLength");
    if (event.target === questionInput) {
      characterCountQuestion.textContent = `${
        maxCharacters - valueLength
      } characters remaining`;
    } else if (event.target === answerInput) {
      characterCountAnswer.textContent = `${
        maxCharacters - valueLength
      } characters remaining`;
    }
  }
});
