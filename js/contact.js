document.addEventListener('DOMContentLoaded', function() {
    let turnoLink = document.getElementById('turno-link');

    turnoLink.addEventListener('click', function(event) {
        event.preventDefault();

        let form = document.createElement('form');

        let nombreInput = document.createElement('input');
        nombreInput.setAttribute('type', 'text');
        nombreInput.setAttribute('placeholder', 'Nombre');
        nombreInput.setAttribute('name', 'nombre');
        form.appendChild(nombreInput);

        let horaInput = document.createElement('input');
        horaInput.setAttribute('type', 'time');
        horaInput.setAttribute('name', 'hora');
        form.appendChild(horaInput);

        let submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Enviar';
        form.appendChild(submitButton);

        let contactoSection = document.getElementById('contacto');
        contactoSection.appendChild(form);

        turnoLink.parentNode.removeChild(turnoLink);
    });
});
