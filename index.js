// Boolean operators
// 5 == 5
// 5 > 4
// 4 < 5
// 5 >= 5
// 5 <= 6

// 5 > 4 && 4 < 10
// 5 > 4 || 4 > 10


var ageRequiredToDrive = 16;

var currentAge = 14;

var canPersonDrive = currentAge >= ageRequiredToDrive;

console.log(canPersonDrive);

if (currentAge >= ageRequiredToDrive) {
    console.log('This person can legally drive');
} else {
    console.log('This person cannot legally drive');
}




// var firstName = 'Sam';

// if (firstName == 'Cam') {
//     console.log('Hello, ' + firstName);
// } else {
//     console.log('Hey ' + firstName);
// }


var costOfMilk = 1;

if (costOfMilk <2) {
    console.log('We will buy 2 gallons');
} else if (costOfMilk < 3) {
    console.log('We will buy only 1 gallon');
} else {
    console.log('No thanks, milk is too expensive');
}


var costOfEggs = 3.12;

var numberOfDozensOfEggsToPurchase = 0;

if (costOfEggs > 3) {

numberOfDozensOfEggsToPurchase = 1;

} else if (costOfEggs > 2) {

numberOfDozensOfEggsToPurchase = 2;

} else if (costOfEggs > 1) {

numberOfDozensOfEggsToPurchase = 3;

} else {

  numberOfDozensOfEggsToPurchase = 4;

}

console.log('I will buy ' + numberOfDozensOfEggsToPurchase + ' dozen eggs.');




var grade = 'D'; 

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    case 'D':
        console.log('60-69');
        break;
    default:
        console.log('0-59');
}



var a = 7;
var b = 6;

if (a == 5) {
    if (b == 6) {
        console.log('a is 5 and b is 6.');
    } else {
        console.log('a is 5 but b is not 6');
    }
} else {
    console.log('a is not 5 and we have no idea what 6 is');
}