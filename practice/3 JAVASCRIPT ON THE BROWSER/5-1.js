const age = parseInt(prompt("How old Ares you?"));
// console.log(isNaN(age));

if(isNaN(age)) {
  console.log("Please write a number")
} else if(age < 18){
  console.log("you are too young")
} else {
  console.log("you can drink")
}