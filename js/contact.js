document.addEventListener('DOMContentLoaded', function() {
    var turnoLink = document.getElementById('turno-link');

    turnoLink.addEventListener('click', function(event) {
        event.preventDefault();

        alert('Abre un formulario de contacto para sacar un turno');
    });
});
