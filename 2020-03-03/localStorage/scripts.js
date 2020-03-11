localStorage.setItem('worker', 'David');
console.log( localStorage.getItem('worker') );

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

localStorage.setItem('all_workers', JSON.stringify( workers) );
console.log( localStorage.getItem('all_workers') );
console.log( JSON.parse(localStorage.getItem('all_workers'))[1].name );


/**
 *  sessionStorage vs localStorage
 */
localStorage.setItem('animal1', 'Cat'); 
sessionStorage.setItem('animal2', 'Cow');
console.log( localStorage.getItem('animal1') );
console.log( sessionStorage.getItem('animal2') );











