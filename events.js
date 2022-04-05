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
    window.alert('Searching!' + q.value);
    // event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
}
