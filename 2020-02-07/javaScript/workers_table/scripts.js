worker_1 = {
	name : "David",
	phone : "04-888888",
	email : "tt@tt.tt",
	tasks: [
        { todo: "Copy that", when: "01/18/2019" },
        { todo: "Send it", when: "03/18/2019" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


worker_2 = {
	name : "Jane",
	phone : "03-6666666",
	email : "gg@gg.gg",
	tasks: [
        { todo: "Copy that", when: "02/19/2019" },
        { todo: "Send it", when: "02/23/2019" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


worker_3 = {
	name : "Dan",
	phone : "02-5555555",
	email : "hh@hh.hh",
	tasks: [
        { todo: "Copy that", when: "06/18/2019" },
        { todo: "Send it", when: "02/22/2019" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


worker_4 = {
	name : "Susan",
	phone : "09-7777777",
	email : "uu@uu.uu",
	tasks: [
        { todo: "Copy that", when: "02/18/2017" },
        { todo: "Send it", when: "02/18/2017" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


var workers = [worker_1, worker_2, worker_3, worker_4];
draw_table();


function add_new_worker() {
	
	let worker_name = document.getElementById('worker_name').value;
	let worker_phone = document.getElementById('worker_phone').value;
	let worker_email = document.getElementById('worker_email').value;
	
	if( worker_name.length < 2 ) {
		alert('Worker name too short');
		return false;
	}
	
	if( worker_phone.length < 9 ) {
		alert('Worker phone too short');
		return false;
	}
	
	let new_worker = {
		name : worker_name,
		phone : worker_phone,
		email : worker_email,
		tasks : []
	}
	
	workers.push( new_worker );
	
	draw_table();
	
	//console.log( workers );
		
	return false;	
}

function delete_worker_by_key( the_key ) {
	workers.splice(the_key,1);
	draw_table();
}


function draw_table() {
	
	let  html_sting = '<table class="table table-striped m-0">';
	html_sting += '<thead class="thead-dark">';
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
	for( let i=0; i < workers.length; i++ ) {
		html_sting += '<tr>';
		html_sting += '<td>' + (i+1) + '</td>';
		html_sting += '<td>' + workers[i].name + '</td>';
		html_sting += '<td>' + workers[i].phone + '</td>';
		html_sting += '<td>' + workers[i].email + '</td>';
		html_sting += '<td>' + draw_tasks_of_workers(i) + '</td>';
		html_sting += '<td><i class="fa fa-trash btn" onClick="delete_worker_by_key(' + i + ')"></td>';
		html_sting += '</tr>';
	}
	html_sting += '</tbody>'
	html_sting += '</table>'
	
	document.querySelector('.workers_table').innerHTML = html_sting;
}


function draw_tasks_of_workers(the_key) {
	
	let the_wokers_task = workers[the_key].tasks;
	
	let tasks_html = '<ul>';
	for( let i=0; i < the_wokers_task.length; i++ ) {
		tasks_html += '<li>Task ' + (i+1) + ': ' + the_wokers_task[i].todo + ' By: ' + the_wokers_task[i].when + '</li>';
	}
	tasks_html += '</ul>';
	
	return tasks_html;
}



