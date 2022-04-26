(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('QT96K0HhziWwfUgrl');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                window.alert('SUCCESS!');
            }, function(error) {
                window.alert('FAILED...', error);
            });
    });
    const f = document.getElementById('form');
    const q = document.getElementById('query');
    const google = 'https://www.google.com/search?q=site%3A+';
    const site = 'CX-rcr.github.io';

    f.addEventListener('submit', submitted);
}

function submitted(event) {
    window.alert('Searching for ' + q.value);
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
}

function search_races() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

function search_products() {
	let input = document.getElementById('p_searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('product');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
