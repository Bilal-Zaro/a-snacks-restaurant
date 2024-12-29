let name = prompt("Please enter your name : ");
let gender = prompt("Please enter your gender male/female : ");

if ((gender == "male")) {
  var m = "Mr";
} 
else {
  var m = "Ms";
}


if (gender == "male") {
  alert("Welcome "+m+" "+ name);
} 
else if (gender == "female") {
  alert("Welcome "+m+" "+ name);
}
else{
    alert("Welcome ");
}
/********/
let order =prompt("We have \n 1-Shawarma \n 2-Zinger \n 3-Burger \n Please enter your order : ");
alert("Your order is being prepared");
if(gender= "male"){
    var m ="Mr"
}
else{
    var m ="Ms"
}
console.log(m +" "+ name + "\n Your order is "+ order + "");
/********/
let n =5; 
switch (n) {
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;
  case 7:
    console.log("SEVEN");
    break;
  case 8:
    console.log("EIGHT");
    break;
  case 9:
    console.log("NINE");
    break;
    default :
    console.log("PLEASE TRY AGAIN")
}