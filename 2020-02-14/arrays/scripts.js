var animals = ['Dog', 'Mouse', 'Cat', 'Cow' ];

console.log( animals );

console.log( animals[2] );

animals[2] = 'Sheep';

console.log( animals[2] );

console.log( animals );

console.log( animals.length );

animals.push("Chicken");

console.log( animals );

var the_last_one = animals.pop();

console.log( animals );

console.log( the_last_one );

var the_first_one = animals.shift();

console.log( animals );

console.log( the_first_one );

animals.sort();

console.log( animals );

/**
 *  Get objects from page
 */
var first_animal_name_object = document.querySelector(".animal_name");
console.log( first_animal_name_object );
first_animal_name_object.innerText = 'dddddd';

var all_animal_name_objects = document.querySelectorAll(".animal_name");

console.log( all_animal_name_objects );

//all_animal_name_objects[0].innerHTML = animals[0];
//all_animal_name_objects[1].innerHTML = animals[1];
//all_animal_name_objects[2].innerHTML = animals[2];

//Exercise: Add food of animals



