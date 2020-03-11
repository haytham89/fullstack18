/**
 *  Find PI
 */
var pi_value = Math.PI;
console.log(pi_value);


/**
 *  Round the PI to integer
 */
var rounded_pi = Math.round(pi_value);
console.log(rounded_pi);



/**
 *  Round the PI to float with 2 digit after the floating point
 */
var rounded_pi_to_2_floating = pi_value.toFixed(2);
console.log(rounded_pi_to_2_floating);



/**
 *  Random number
 */
var random_number = Math.random();
console.log(random_number);

console.log(random_number * 100);
console.log(Math.floor(random_number * 100));
console.log(Math.ceil(random_number * 100));
console.log(Math.round(random_number * 100));


/**
 *  Power of: Hezka
 */
var power_result = Math.pow(2, 3);
console.log(power_result);

var cone_height = 20;
var cone_base_radius = 10;

volume_of_a_cone = cone_volume( cone_height, cone_base_radius );
console.log( volume_of_a_cone );

function cone_volume( height, radius ) {
	let volume = (Math.PI)*( Math.pow(radius,2)*(cone_height/3) );
	return volume.toFixed(2);
}


