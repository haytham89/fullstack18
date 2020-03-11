worker_1 = {
	name : "David",
	phone : "04-888888",
    email : "tt@tt.tt",
    tasks : [
        {
            task: 'Send letters',
            date:'2.3.2015'
        },
        {
            task: 'Thorow garbage',
            date:'3.6.2015'
        }
    ]
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


worker_5 = {
	name : "Shula",
	phone : "09-234234",
	email : "zz@zz.zz"
};

var workers_array = [worker_1, worker_2, worker_3, worker_4, worker_5];


/* console.log( worker_2 );
console.log( worker_2.phone );
worker_2.phone = '77777777';
console.log( worker_2 );
 */

draw_table(workers_array);

function draw_table(workers) {
	
	let html_sting = '<table class="table table-striped m-0">' +
	'<thead class="thead-dark">';
	html_sting += '<tr>';
	html_sting += '<th>#</th>';
	html_sting += '<th>Name</th>';
	html_sting += '<th>Phone</th>';
	html_sting += '<th>Email</th>';
	html_sting += '<th>Tasks</th>';
	html_sting += '<th>Delete</th>';
	html_sting += '</tr>';
	html_sting += '</thead>';
	html_sting += '<tbody>';
	for(let i=0; i < workers.length; i++) {
        html_sting += '<tr>';
        html_sting += '<td>' + (i+1) + '</td>';
        html_sting += '<td>' + workers[i].name + '</td>';
        html_sting += '<td>' + workers[i].phone + '</td>';
        html_sting += '<td>' + workers[i].email + '</td>';
        html_sting += '<td>';

        for( let x=0; x < workers[i].tasks.length; x++ ) {

        }

        html_sting += '</td>';
        html_sting += '<td><button onclick="deleteWorker(' + i + ')">x</button></td>';
        html_sting += '</tr>';
    }
	html_sting += '</tbody>'
	html_sting += '</table>'
	
	document.getElementById('output').innerHTML = html_sting;
}


function deleteWorker(whoToDelete) {
    
    let answer = confirm('Are you sure?');
    if( !answer ) {
        return;
    }
    workers_array.splice( whoToDelete, 1);
    draw_table(workers_array);
}

//FOR DEBUGGING
document.getElementById('worker_name').value = 'David';
document.getElementById('worker_phone').value = '58888888';
document.getElementById('worker_email').value = 'tt@tt.tt';

function add_new_worker() {
     
    let new_name = document.getElementById('worker_name').value;
    let new_phone = document.getElementById('worker_phone').value;
    let new_email = document.getElementById('worker_email').value;

    let new_worker = {
        name : new_name,
        phone : new_phone,
        email : new_email
    };

    //console.log(new_worker)

    workers_array.push(new_worker);
    draw_table(workers_array);

    return false;
}
