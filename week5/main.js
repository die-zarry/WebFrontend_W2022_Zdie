const form = document.forms['myform'];
form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        alert('fill in the blank');
    }
    form.classList.add('Yay, I made it!');
});