// var msg = "King";
// alert(msg);
// document.write("Welcome to the world");

// msg = "Be a beast";

// alert(msg);



// var userName = prompt("What is your name?");

// alert("Welcome "+(userName));
// console.log(userName.length);
// console.log(userName.toLowerCase());




// var name = prompt("What is your name?");
// var personality = prompt("How would you describe yourself?");
// var age = prompt("How old are you?");

// alert(name + " is a " + personality + " person");
// alert("He is " + age + " years old");




// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerday = 24;
// var daysPerWeek = 7;
// var weeksPeryear = 52;

// var numOfYears = prompt("How old are you?");

// var numOfSecondsLived = secondsPerMin * minsPerHour * hoursPerday * daysPerWeek * weeksPeryear * numOfYears;

// document.write("You have lived an average of " + numOfSecondsLived + " seconds");



// var weight1 = prompt("What was your weight last month?");
// var weight2 = prompt("what was your weight this month?");

// var averageWeight = (parseFloat(weight1) + parseFloat(weight2))/2;

// document.write("Average weight is " + averageWeight);



/*creating a random number in js
var numbr_max = parseInt(prompt("What is the maximum value of your random number?"));
var numbr_min = parseInt(prompt("What is the minimum value of your random number?"));
var ranNum = Math.floor(Math.random() * (numbr_max - numbr_min + 1)) + numbr_min;
alert("Your random number is " + ranNum);*/



/*conditional statement

var answr = prompt("what is my surname?");
var upperAns = answr.toUpperCase();
var chec = "LAWAL";
if (upperAns === chec) {
    document.write("Correct answer!!! You smart!!!");
} else{
   document.write("Wrong Answer.. smh!!!");
}*/



/*var correctGuess = false;
var ranNum = Math.floor(Math.random()*6)+1;
var guess = prompt("Guess a random number between 1 and 6");
if (parseInt(guess) === ranNum) {
    correctGuess = true;
}else if (parseInt(guess) < ranNum){
    var guess2 = prompt("Your guess is less than the random number. Guess again");
    if (parseInt(guess2) === ranNum) {
        correctGuess = true;
    }
} else if(parseInt(guess) > ranNum){
    var guess2 = prompt("Your guess is more than the random number. Guess again");
    if (parseInt(guess2) === ranNum) {
        correctGuess = true;
    }
}

if ( correctGuess ){
    document.write("You guessed correctly");
} else{
    document.write("<p>sorry, wrong guess</p>" );
    document.write("<p>Random number was "+ ranNum + "</p>");
}*/

var correct = 0;
var myName = prompt("What is my surname?");
if (myName.toUpperCase() === "LAWAL") {
    correct += 1;
}

var myAge = prompt("How old am I?");
if (myAge === "22") {
    correct += 1;
}

var mySOO = prompt("Where am I from?");
if (mySOO.toUpperCase() === "OYO") {
    correct += 1;
}

var myGender = prompt("Am I a boy or a girl?");
if (myGender.toUpperCase() === "BOY") {
    correct += 1;
}

var myColor = prompt("What is my best color?");
if (myColor.toUpperCase() === "BLUE") {
    correct += 1;
}

document.write("<p>You got " + correct + " out of 5 questions correctly</p>");

if (correct === 5) {
    document.write("<p>You know me too well</p>");
}else if (correct === 4 || correct === 3) {
    document.write("<p>You know me but not too well</p>");
}else if(correct === 2 || correct === 1){
    document.write("<p>You probably guessed and got lucky</p>");
}else{
    document.write("<p>You don't know me at all... SMH!!!</p>");
}