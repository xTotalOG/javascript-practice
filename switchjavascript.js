var place = 'first';

switch (place) {
  case 'first':
    console.log('Gold');
    break;
  case 'second':
    console.log('Silver');
    break;
  case 'third':
    console.log('Bronze');
    break;
  default:
    console.log('No medal');
};

var expression = 3;

switch (expression) {
  case 3:
    console.log("yoyo");
    break;
  case 4:
    console.log("lol");
    break;
  default:
    console.log(3);
};

var age = 34;
if (age >= 65) {
  console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary")
} else if (age < 18) {
  console.log("You get an allowance")
} else {
  console.log("The value of the age variable is not numerical")
}

var day = "sdfa";

switch (day) {
  case "Monday":
    console.log("Swim");
    break;
  case "Tuesday":
    console.log("Study");
    break;
  case "Wednesday":
    console.log("Run");
    break;
  case "Thursday":
    console.log("Drink");
    break;
  case "Friday":
    console.log("Rest");
    break;
  case "Saturday":
    console.log("Cook");
    break;
  case "Sunday":
    console.log("Sleep");
    break;
  default:
    console.log("There is no such day")
}