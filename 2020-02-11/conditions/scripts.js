var age = prompt("How old are you?");
//var name = prompt("What is your name?");

/**
* 
* >    <    >=    <=    !=    ==    ===    &&   ||
* 
*/


if( age >= 18 ) {
	console.log( 'You are old enough' );
} 
else {
	console.log( 'You are too young' );
}


var animal = 'horse';

if( animal == 'horse' ) {
	console.log( "It is a horse" );
}
else {
	if( animal == 'fish' ) {
		console.log( "It is a fish" );
	}
	else {
		if( animal == 'dog' ) {
			console.log( "It is a dog" );
		}
		else {
			console.log( "Dont know this animal" );
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
        console.log("The animal is:" + animal + " and it barks");
        break;
    default:
        console.log("Dont know this animal");
        break;
}

/**
* For the operation on few animals
*/

switch (animal) {
    case "horse":
    case "dog":
        console.log("The animal is:" + animal + " it runs on the ground");
        break;
    case "fish":
        console.log("The animal is:" + animal + " and it swims under water");
        break;
    default:
        console.log("Dont know this animal");
        break;
}

