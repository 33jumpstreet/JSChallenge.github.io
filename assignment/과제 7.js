const numForm = document.querySelector(".numForm");
const rangeMax = document.querySelector(".rangeMax");
const guessNumber = document.querySelector(".guessNumber");
const UserChoose = document.querySelector(".UserChoose");
const UserResult = document.querySelector(".UserResult");

function CasinoResult(guessNum, randomNum) {
  UserChoose.innerText = `you choose ${guessNum}, the machine choose: ${randomNum}`;
  guessNum = parseInt(guessNum, 10);
  if (guessNum === randomNum) {
    UserResult.innerText = `you won!`;
  } else {
    UserResult.innerText = `you lost!`;
  }
}

function handleMakeRandomNumber(e) {
  e.preventDefault();
  const guessNum = guessNumber.value;
  const maxNum = rangeMax.value;
  const randomNum = Math.ceil(Math.random() * maxNum);
  CasinoResult(guessNum, randomNum);
}

function rangeMaxInput() {
  const inputMax = rangeMax.value;

  rangeMax.innerText = `${inputMax}`;
  numForm.addEventListener("submit", handleMakeRandomNumber);
}

function init() {
  rangeMax.oninput = rangeMaxInput;
}
init();
