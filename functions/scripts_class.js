function calculateVAT(theTotalToCalculate) {

    let totalPlusVAT;

    if( isNaN(theTotalToCalculate) == false ) { 
        totalPlusVAT = theTotalToCalculate*1.17;
        //totalPlusVAT = Math.round(totalPlusVAT * 100) / 100;
        totalPlusVAT = totalPlusVAT.toFixed(4);
    }
    else {
        totalPlusVAT = 'It is not a number!';
    }

    
    return totalPlusVAT;
    
}


var total = prompt('Please enter the sum:');

var result = calculateVAT(total);
document.getElementById('output').innerHTML = result;

