/*
var age = prompt('How old are you?');
var outputMessage;

if( age < 13 ) {
    outputMessage = 'You are too young';
}
else if( age == 13 ) {
    outputMessage = 'You are exactly 13';
}
else {
    outputMessage = 'You are old enough';
}

document.getElementById('output').innerHTML = outputMessage;
*/

var answer = confirm('Do you love the city?');
console.log(answer);

if (answer == true) {
    console.log('You love buildings.');
}
else {
    console.log('You love trees.');
}

//Homework
if (age <= 0) {

}
else if (age > 0 && age < 3) {

}
else if (age >= 3 && age < 14) {

}
else {

}


// Bad practice
var animal = 'horse';

if (animal == 'horse') {
    console.log("It is a horse");
}
else {
    if (animal == 'fish') {
        console.log("It is a fish");
    }
    else {
        if (animal == 'dog') {
            console.log("It is a dog");
        }
        else {
            console.log("Dont know this animal");
        }
    }
}

switch (animal) {
    case "horse":
        console.log("The animal is:" + animal + " and it runs");
        break;
    case "fish":
        console.log("The animal is:" + animal + " and it swims");
        break;
    case "dog":
    case "cat":
        console.log("The animal is:" + animal + " and it barks");
        break;
    default:
        console.log("Dont know this animal");
        break;
}












