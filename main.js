"use strict"

const form = document.querySelector(".form");
const errorMessageDiv = document.querySelector(".box--aria-error");

form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();

  let { feedback } = Object.fromEntries(new FormData(this));
  if (!feedback) {
    errorMessageDiv.textContent = "Please choose one of the scores.";
    return;
  } 
  this.submit();
}

form.onchange = function() {
  let isErrorMessageShowing = errorMessageDiv.textContent;
  if (isErrorMessageShowing) errorMessageDiv.textContent = "";
}