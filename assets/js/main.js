$(document).ready(function() {

    console.log($("#mensaje"))

    $('#mensaje').html(localStorage.getItem('conversacion'));

    $('.add-items').submit(function(event) {
        event.preventDefault();

        var mens = $('#mensaje').val();

        if (item) {
            $('#mensaje').append$("#conversacion");

            localStorage.setItem('conversacion', $('#mensaje').html());

        }
    })

});