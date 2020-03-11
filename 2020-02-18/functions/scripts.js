var total = prompt('Enter total before vat:');
//var result = [];

function calculate_vat( total_before_vat ) {
	
	console.log(total_before_vat);
	
	let vat = total_before_vat*0.17;
	
	console.log( typeof( 1*total_before_vat ) );
	
	vat = Math.round(vat * 100) / 100;
	
	console.log(vat);
	
	let total_with_vat = 1*total_before_vat + vat;
	
	console.log(total_with_vat);
}


calculate_vat( total );










function CheckScope() {
    var x = 4;
    if (x < 30) {
        let y = "YY";
        if (true) {
            let r = "R";
            console.log(y);
        }
        var t = "T";
        console.log(x, y, t);
    }
    console.log(x, t);
}