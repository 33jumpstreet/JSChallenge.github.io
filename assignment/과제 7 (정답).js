const guessForm = document.querySelector("form");
const guessInput = guessForm.querySelector("input");
const maxNumber = document.querySelector(".maxNumber");
const result = document.querySelector("#js-result");

function CasinoResult(Userguess, random) {
  const resultSpan = result.querySelector("span");
  resultSpan.innerText = 
  `you choose ${Userguess}, the machine choose: ${random}.
  ${Userguess === random ? "you won!" : "you lost!"}`;
}

function handleMakeRandomNumber(e) {
  e.preventDefault();
  const Userguess = parseInt(guessInput.value, 10);
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  CasinoResult(Userguess, random);
}

function rangeMaxInput() {
  const max = maxNumber.value;

  maxNumber.innerText = `${max}`;
  guessForm.addEventListener("submit", handleMakeRandomNumber);
}

function init() {
  maxNumber.oninput = rangeMaxInput;
}
init();
