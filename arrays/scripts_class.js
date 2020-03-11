var animals = [ 'Dog', 'Mouse', 'Cat', 'Cow' ];

console.log(animals);

console.log(animals[1]);

console.log( animals.length );

animals[3] = 'Sheep';

console.log(animals[3]);

animals.push("Chicken");

console.log(animals);

var the_last_one = animals.pop();

console.log( animals );
console.log( "The last one deleted: " + the_last_one );

var the_first_one = animals.shift();

console.log( animals );
console.log( the_first_one );

animals.sort();
console.log( animals ); // Capital letters are different from small letters

//animals.splice(1, 1);
//console.log( animals )

for( let index = 0; index < animals.length; index++ ) {
    console.log( animals[index] );
}