function validateForm() {
    var imie = $('#name').val();
    var email = $('#email').val();
    if (imie !== '' && email !== '' && email.search('@') >=1 ){
        alert ("Dziękuję za poprawne wypełnienie formularza");   
    };