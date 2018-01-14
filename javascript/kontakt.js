function validateForm() {
    var imie = $('#name').val();
    var email = $('#email').val();
    if (imie !== '' && email !== '') {
        alert ("Dziękuję za poprawne wypełnienie formularza");   
    };
};