
localStorage.setItem('worker', 'David');
console.log( localStorage.getItem('worker') );

// You can do this
localStorage.setItem('anothe_worker', 'Dan');
// Or this - it's the same
localStorage.anothe_worker = 'Dan';

console.log( localStorage.getItem('anothe_worker') );


localStorage.removeItem('worker');
console.log( localStorage.getItem('worker') );


localStorage.setItem('worker', 'David');
localStorage.setItem('worker', 'Tal');
console.log( localStorage.getItem('worker') );



var worker_1 = {
	name : "David",
	phone : "04-888888",
	email : "tt@tt.tt"
};


var worker_2 = {
	name : "Jane",
	phone : "03-6666666",
	email : "gg@gg.gg"
};


var worker_3 = {
	name : "Dan",
	phone : "02-5555555",
	email : "hh@hh.hh"
};

var workers = [worker_1, worker_2, worker_3];

var workers_text_for_localstorage = JSON.stringify( workers );

localStorage.setItem('all_workers', workers_text_for_localstorage );

console.log( localStorage.getItem('all_workers') );

let the_workers_from_localstorage = localStorage.getItem('all_workers');

let the_workers_from_localstorage_as_array = JSON.parse(the_workers_from_localstorage);

console.log( the_workers_from_localstorage_as_array );

/**
 *  sessionStorage vs localStorage
 */
//localStorage.setItem('animal1', 'Cat'); 
//sessionStorage.setItem('animal2', 'Cow');
console.log( localStorage.getItem('animal1') );
console.log( sessionStorage.getItem('animal2') );



