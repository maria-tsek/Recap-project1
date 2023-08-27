console.clear();

const bookmarkIcon = document.getElementById("bookmark-icon");

// keep track of the bookmark state
let isBookmarked = false;

// Function to toggle the bookmark state and update the visual style
function toggleBookmark() {
  if (isBookmarked) {
    bookmarkIcon.src =
      "https://icons.veryicon.com/png/o/object/material-design-icons/bookmark-29.png";
    bookmarkIcon.alt = "black bookmark";
  } else {
    bookmarkIcon.src =
      "https://cdn.icon-icons.com/icons2/936/PNG/512/bookmark-white_icon-icons.com_73653.png";
    bookmarkIcon.alt = "white bookmark";
  }
  isBookmarked = !isBookmarked;
}

bookmarkIcon.addEventListener("click", toggleBookmark);

//answer button

const showAnswerButton = document.querySelector(".show-answer");
const answerElement = document.querySelector('[data-js="answer"]');

function hideAnswer() {
  answerElement.setAttribute("hidden", "");
}

function showAnswer() {
  answerElement.removeAttribute("hidden");
}

hideAnswer();

showAnswerButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (showAnswerButton.textContent === "Show Answer") {
    showAnswer();
    showAnswerButton.textContent = "Hide Answer";
  } else {
    hideAnswer();
    showAnswerButton.textContent = "Show Answer";
  }
});
