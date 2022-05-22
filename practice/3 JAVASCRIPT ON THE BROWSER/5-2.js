const age = parseInt(prompt("How old Ares you?"));
// console.log(isNaN(age));

if(isNaN(age)) {
  console.log("Please write a number")
} else if(age < 18){
  console.log("you are too young")
} else if (age >= 18 && age <= 50) {
  console.log("you can drink")
} else if (age > 50 && age <=80) {
  console.log("you shoule exercise")
} else if (age > 80) {
  console.log("you can do whatever you want")
}