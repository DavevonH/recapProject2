const buttonElement = document.querySelector('[data-js="button-element"]');

buttonElement.addEventListener("click", () => {
  buttonElement.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer"]');
const answer = document.querySelector('[data-js="show__answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer");

  if (answer.classList.contains("card__answer")) {
    answerButton.innerText = "Show Answer";
  } else {
    answerButton.innerText = "Hide Answer";
  }
});
