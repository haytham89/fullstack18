
var workers_name = ['David', 'Jane', 'Dan', 'Susan'];
var workers_phone = ['04-888888', '03-6666666', '02-5555555', '09-7777777'];
var workers_email = ['tt@tt.tt', 'gg@gg.gg', 'hh@hh.hh', 'uu@uu.uu'];


worker_1 = {
	name : "David",
	phone : "04-888888",
	email : "tt@tt.tt"
};


worker_2 = {
	name : "Jane",
	phone : "03-6666666",
	email : "gg@gg.gg"
};


worker_3 = {
	name : "Dan",
	phone : "02-5555555",
	email : "hh@hh.hh"
};


worker_4 = {
	name : "Susan",
	phone : "09-7777777",
	email : "uu@uu.uu"
};



console.log( worker_2 );
console.log( worker_2.email );

worker_2.vacationDays = 3;
console.log( worker_2 );

/*worker_2.vacationDays = 5;
console.log( worker_2 );*/

workers_array = [worker_1, worker_2, worker_3];
draw_workers( workers_array );

function draw_workers( workers ) {
	
	let html = "";
    for( let i = 0; i < workers.length; i++ ){
        html += "<div>";
        html += "<div class='field'>";
        html += "<label>Name:</label> " + workers[i].name;
        html += "</div>";
        html += "<div class='field'>";
        html += "<label>Phone:</label> " + workers[i].phone;
        html += "</div>";
        
        html += "<div class='field'>";
        html += "<label>Vacation Days:</label> ";
        if( workers[i].vacationDays ) {
			html += workers[i].vacationDays
		}
		else {
			html += "No data";
		}		
        html += "</div>";
        
        //show short if
		
        html += "<div class='field'>";
        html += "<label>Email:</label> " + workers[i].email;
        html += "</div>";
        html += "</div><br/><br/>";
    }

    document.getElementById("output").innerHTML = html;
}



worker_1 = {
	name : "David",
	phone : "04-888888",
	email : "tt@tt.tt",
	tasks: [
        { todo: "Copy that", when: "02/18/2019" },
        { todo: "Send it", when: "02/18/2019" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};